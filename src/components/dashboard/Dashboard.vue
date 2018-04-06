<template>
  <div class="dashboard" @mousedown="mousedown($event)" @mousemove="mousemove($event)" @mouseup="mouseup($event)" @click="click">
    <svg xmlns="http://www.w3.org/2000/svg" style="border: 1px solid black;position:absolute;z-index:100;overflow:visible;width:0px;height:0px;">
      <menu-shape id="1" />
    </svg>
    <menu-superior/>
    <tool-bar/>
    <div class="columns" style="position:relative">
      <div class="column is-3" style="position:relative">
        <menu-izquierdo/>
      </div>
      <div class="column" style="position:relative">
        <div>
          <svg ref="svg" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid whitesmoke;width:100%;height:100%;position:absolute;min-width:3218px;min-height:3072;background-image:none">
            <g>
              <component :is="crear(object.tipo)" v-bind="{id : object.id}" v-for="object in this.$store.getters.objectsArray" :key="object.id"></component>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rectangle from '@/components/shapes/Rectangle';
import Circle from '@/components/shapes/Circle';
import MenuShape from '@/components/shapes/MenuShape';
import MenuIzquierdo from './MenuIzquierdo';
import MenuSuperior from './MenuSuperior';
import ToolBar from './ToolBar';

export default {
  name: 'Dashboard',
  created() {},
  data() {
    return {
      dragging: false,
      draggingX: 0,
      draggingY: 0,
    };
  },
  methods: {
    click() {
      console.log('DashBoard');
    },
    crear(t) {
      switch (t) {
        case 'Rectangle':
          return Rectangle;
        case 'Circle':
          return Circle;
        case 'MenuShape':
          return MenuShape;
        default:
          return null;
      }
    },
    mousedown(event) {
      const draggingElementId = this.$store.getters.idDrag;
      if (draggingElementId) {
        this.dragging = true;
        this.draggingX = event.clientX;
        this.draggingY = event.clientY;
        if (event.shiftKey) {
          this.$store.commit('addSelected', {
            id: draggingElementId,
            value: true,
          });
        } else {
          this.$store.commit('setSelectedIfNotGroup', {
            id: draggingElementId,
            value: true,
          });
        }
      } else {
        this.$store.commit('deselectAll');
      }
    },
    mousemove(event) {
      if (this.dragging) {
        event.preventDefault();
        this.$store.commit('setXY', {
          dx: event.clientX - this.draggingX,
          dy: event.clientY - this.draggingY,
        });
      }
    },
    mouseup(event) {
      if (this.dragging) {
        this.dragging = false;
        this.$store.commit('setIdDrag', null);
        this.$store.commit('updateDXDY');
        const point = this.$refs.svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        const gPoint = point.matrixTransform(
          this.$refs.svg.getScreenCTM().inverse(),
        );
        this.$store.commit('hideShowMenuShape', gPoint);
      }
    },
  },
  components: {
    MenuIzquierdo,
    MenuSuperior,
    ToolBar,
    MenuShape,
  },
};
</script>

