<template>
  <div class="app">
    <div style="width: 70vh; height: 70vh;">
      <Roulette :slices="slices" :labels="labels" />
    </div>
    <div class="input-wrap">
      <input v-model="slicesInput" placeholder="Enter weights (space-separated)">
      <input v-model="labelsInput" placeholder="Enter names (optional, space-separated)">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Roulette from './components/Roulette.vue';

@Component({
  components: {
    Roulette,
  },
})
export default class App extends Vue {
  slicesInput = '0.25 0.25 0.25 0.25';
  labelsInput = '';
  get slices() {
    return this.slicesInput.split(' ').map(parseFloat);
  }
  get labels() {
    if (this.labelsInput === '') return [];
    return this.labelsInput.split(' ');
  }
}
</script>

<style>
html {
  background-color: #333;
  color: #fff;
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.input-wrap {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  box-sizing: border-box;
}
.input-wrap input {
  width: 100%;
  box-sizing: border-box;
  background-color: #222;
  color: #fff;
  padding: 5px;
  border: 0;
  margin-bottom: 5px;
}
.input-wrap input:focus {
  outline: 1px solid #555;
}
</style>
