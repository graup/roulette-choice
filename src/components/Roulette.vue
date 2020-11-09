<template>
  <svg width="100%" height="100%" viewBox="0 0 40 40" @click="spin" >
    <g class="wheel" :style="`transform: rotate(${offset/100*360+rotate}deg)`">
      <image href="@/components/wheel.png" height="15" width="15" x="12.5" y="12.5" class="wheel-image" />
      <!-- segments -->
      <g v-for="slice in sliceAttributes" :key="`arc${slice.index}`">
        <circle 
          class="segment"
          :class="{ winner: winnerIndex === slice.index}"
          :id="`circle-${slice.index}`"
          cx="20" cy="20" r="13"
          fill="transparent" :stroke="slice.color"
          stroke-width="11"
          :stroke-dasharray="`${slice.slice * (2 * Math.PI * 13)} ${(1 - slice.slice) * (2 * Math.PI * 13)}`"
          :stroke-dashoffset="`${slice.dashOffset * (2 * Math.PI * 13)}`"
        ></circle>
      </g>

      <circle cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke="#000000" stroke-opacity="0.1" stroke-width="3.5"></circle>

      <!-- labels -->
      <path id="circle-path" fill="transparent" d="M4.084505690811,20A15.915494309189,15.915494309189 0 1 135.915494309189,20A15.915494309189,15.915494309189 0 1 14.084505690811,20 M4.084505690811,20A15.915494309189,15.915494309189 0 1 135.915494309189,20A15.915494309189,15.915494309189 0 1 14.084505690811,20" />
      <g v-for="slice in sliceAttributes" :key="`text${slice.index}`">
        <text :dx="slice.labelOffset * (2 * Math.PI * 15.915494309189) - 0.3" dy="0.1" class="label" text-anchor="middle" dominant-baseline="central">
          <textPath xlink:href="#circle-path">
            {{totalLabels[slice.index]}}
          </textPath>
        </text>
      </g>
    </g>

    <!-- arrow -->
    <g transform="translate(19.75 0.5)" fill="#fff">
      <rect x="0" y="0" width="0.5" height="2" />
      <g transform="translate(0 2)" fill="#fff">
        <polygon points="0,0 0.5,0 0.25,0.5" />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from 'vue-property-decorator';
import { normalize, cummulativeSum } from '../utils/stats';

const colors = [
  "#F93E3B",
  "#0D51E6",
  "#EF3BF3",
  "#FDA400",
];

@Component
export default class Roulette extends Vue {
  @Prop() slices!: number[];
  @Prop({ default: -25 }) offset!: number;
  @Prop({ default: []}) labels!: string[];
  rotate = 0;
  winnerIndex = -1;
  timeout: null | number = null;

  get normalizedSlices() {
    return normalize(this.slices);
  }

  get cummulativeSlices() {
    return cummulativeSum(this.normalizedSlices);
  }

  @Watch('slices')
  slicesChanged() {
    this.winnerIndex = -1;
  }

  get totalLabels() {
    const labels = [...this.labels];
    const missing = this.slices.length - labels.length;
    if (missing > 0) {
      labels.push(...[...Array(missing).keys()].map(a => `${a + 1 + labels.length}`))
    }
    return labels;
  }

  get sliceAttributes() {
    const sliceAttributes = [];
    let dashOffset = 0;
    let index = 0;
    for (const slice of this.normalizedSlices) {
      sliceAttributes.push({
        index,
        slice,
        dashOffset: 1 - dashOffset,
        labelOffset: (0.5 + dashOffset + slice/2) % 1,
        color: colors[index % colors.length],
      });
      dashOffset += slice;
      index += 1;
    }
    return sliceAttributes;
  }

  spin() {
    this.winnerIndex = -1;
    const winner = Math.random();
    const winnerIndex = this.cummulativeSlices.findIndex(probability => winner < probability);
    this.rotate = Math.ceil(this.rotate / 360) * 360 +  (1-winner) * 360 + 360 * 10;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.winnerIndex = winnerIndex;
    }, 9600);
  }
}
</script>

<style scoped>
svg {
  cursor: pointer;

}
.wheel {
  transform-origin: 50% 50%;
  transition: transform 10s cubic-bezier(0.3, 1, 0.7, 1);
  will-change: transform;
  border-radius: 100%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
}
.wheel-image {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(90deg);
}
.label {
  font-size: 1.5px;
  fill: #fff;
  z-index: 1;
}
.segment {
  opacity: 0.8;
}
.winner {
  opacity: 1;
}
</style>