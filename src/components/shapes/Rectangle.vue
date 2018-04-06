<template>
  <g @mousedown="mousedown">
    <rect :id="id" :x="x" :y="y" :width="width" :height="height" fill="red"></rect>
    <rect :x="x-10" :y="y-10" :width="width+20" :height="height+20" style="stroke: #000;
             stroke-width: 1;
             stroke-dasharray: 10 5;
             fill: none;
            " v-if="selected" />
  </g>
</template>
<script>
export default {
  name: 'Rectangle',
  props: ['id'],
  computed: {
    x() {
      return this.$store.getters.objects[this.id].x;
    },
    y() {
      return this.$store.getters.objects[this.id].y;
    },
    width() {
      return this.$store.getters.objects[this.id].width;
    },
    height() {
      return this.$store.getters.objects[this.id].height;
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

