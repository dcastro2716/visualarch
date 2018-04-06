<template>
  <g @mousedown="mousedown" v-if="this.$store.getters.showMenuShape">
    <rect :id="id" :x="x" :y="y" width="100px" height="100px" fill="none" stroke="black" stroke-dasharray="10, 5" pointer-events="visible"></rect>
  </g>
</template>
<script>
export default {
  name: 'MenuShape',
  props: ['id'],
  computed: {
    x() {
      return this.$store.getters.objects[this.id].x;
    },
    y() {
      return this.$store.getters.objects[this.id].y;
    },
  },
  methods: {
    mousedown() {
      this.$store.commit('setIdDrag', this.id);
    },
  },
};
</script>

