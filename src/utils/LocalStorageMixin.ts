/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class LocalStorage extends Vue {
  storeKeys: string[] = [];

  mounted() {
    for (const key of this.storeKeys) {
      const value = localStorage.getItem(key);
      if (value) {
        // @ts-ignore
        this[key] = value;
      }
      this.$watch(key, (value: string) => {
        localStorage.setItem(key, value);
      });
    }
  }
}