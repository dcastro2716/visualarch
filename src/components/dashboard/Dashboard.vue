<template>
  <div>
    <div @mousedown="mousedown($event)" @mousemove="mousemove($event)" @mouseup="mouseup">
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" style="border: 1px solid black; background: #E0FFFF;">
        <component :is="crear(object.tipo)" v-bind="{id : object.id}" v-for="object in this.$store.getters.objectsArray" :key="object.id"></component>
      </svg>
    </div>
  </div>
</template>
<script>
import Rectangle from '@/components/shapes/Rectangle';
import Circle from '@/components/shapes/Circle';

export default {
  name: 'Dashboard',
  created() {},
  data() {
    return {
      dragging: false,
      draggingElementId: null,
      draggingX: 0,
      draggingY: 0,
    };
  },
  methods: {
    crear(t) {
      switch (t) {
        case 'Rectangle':
          return Rectangle;
        case 'Circle':
          return Circle;
        default:
          return null;
      }
    },
    mousedown(event) {
      this.dragging = true;
      this.draggingElementId = event.target.id || null;
      if (this.draggingElementId) {
        this.draggingX = event.clientX;
        this.draggingY = event.clientY;
        if (event.shiftKey) {
          this.$store.commit('addSelected', {
            id: this.draggingElementId,
            value: true,
          });
        } else {
          this.$store.commit('deselectAll');
          this.$store.commit('setSelected', {
            id: this.draggingElementId,
            value: true,
          });
        }
      } else {
        this.$store.commit('deselectAll');
      }
    },
    mousemove(event) {
      if (this.dragging) {
        if (this.draggingElementId) {
          this.$store.commit('setXY', {
            id: this.draggingElementId,
            dx: event.clientX - this.draggingX,
            dy: event.clientY - this.draggingY,
          });
        }
      }
    },
    mouseup() {
      if (this.dragging) {
        if (this.draggingElementId) {
          this.dragging = false;
          this.draggingElementId = null;
        }
      }
    },
  },
  components: {
    Rectangle,
  },
};
</script>

