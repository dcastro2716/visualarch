<template>
  <g @mousedown="mousedown">
    <circle :id="id" :cx="cx" :cy="cy" :r="r" style="stroke: #000;" fill="red" />
    <rect :x="cx-r-10" :y="cy-r-10" :width="r*2+20" :height="r*2+20" style="stroke: #000;
             stroke-width: 1;
             stroke-dasharray: 10 5;
             fill: none;
            " v-if="selected" />
  </g>
</template>
<script>
export default {
  name: 'Cicle',
  props: ['id'],
  computed: {
    cx() {
      return this.$store.getters.objects[this.id].x;
    },
    cy() {
      return this.$store.getters.objects[this.id].y;
    },
    r() {
      return this.$store.getters.objects[this.id].r;
    },
    selected() {
      return this.$store.getters.selected.some(e => e.id == this.id);
    },
  },
  methods: {
    mousedown() {
      this.$store.commit('setIdDrag', this.id);
    },
  },
};
</script>
