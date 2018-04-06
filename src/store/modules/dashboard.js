import Vue from 'vue';

const state = {
  objects: {
    1: {
      id: 3,
      x: 150,
      y: 0,
      width: 100,
      height: 100,
      tipo: 'MenuShape',
    },
  },
  selected: [],
  countShapes: 1,
  idDrag: null,
  showMenuShape: false,
};

const getters = {
  objects: state => state.objects,
  objectsArray: state =>
    Object.values(state.objects || {}).reduce((res, obj) => {
      if (obj.tipo !== 'MenuShape') {
        res.push(obj);
      }
      return res;
    }, []),
  selected: state => state.selected,
  idDrag: state => state.idDrag,
  showMenuShape: state => state.showMenuShape,
};

// actions
const actions = {};

// mutations
const mutations = {
  setIdDrag(state, id) {
    state.idDrag = id;
  },
  setXY(state, point) {
    state.selected.forEach(obj => {
      state.objects[obj.id].x = obj.dx + point.dx;
      state.objects[obj.id].y = obj.dy + point.dy;
    });
  },
  updateDXDY(state) {
    state.selected.forEach(obj => {
      obj.dx = state.objects[obj.id].x;
      obj.dy = state.objects[obj.id].y;
    });
  },
  setSelected(state, selected) {
    state.selected = [];
    state.selected.push({
      id: selected.id,
      dx: state.objects[selected.id].x,
      dy: state.objects[selected.id].y,
    });
  },
  setSelectedIfNotGroup(state, selected) {
    if (state.selected.length < 2) {
      state.selected = [];
      state.selected.push({
        id: selected.id,
        dx: state.objects[selected.id].x,
        dy: state.objects[selected.id].y,
      });
    }
  },
  addSelected(state, selected) {
    state.selected.push({
      id: selected.id,
      dx: state.objects[selected.id].x,
      dy: state.objects[selected.id].y,
    });
  },
  deselectAll(state) {
    state.selected = [];
  },
  addShape(state, baseShape) {
    state.countShapes += 1;
    const shape = {
      id: state.countShapes,
      x: baseShape.x,
      y: baseShape.y,
      width: 100,
      height: 100,
      tipo: baseShape.tipo,
    };
    Vue.set(state.objects, shape.id, shape);
  },
  updateShowMenuShape(state, point) {
    state.objects[1].x = point.x - 50;
    state.objects[1].y = point.y - 50;
    state.objects[1].base = point.base;
    state.showMenuShape = true;
  },
  hideShowMenuShape(state, point) {
    if (state.showMenuShape) {
      if (point.x > 50 && point.y > 50) {
        state.countShapes += 1;
        if (state.objects[1].base === 'Rectangle') {
          const shape = {
            id: state.countShapes,
            x: point.x - 50,
            y: point.y - 50,
            width: 100,
            height: 100,
            tipo: state.objects[1].base,
          };
          Vue.set(state.objects, shape.id, shape);
        } else if (state.objects[1].base === 'Circle') {
          const shape = {
            id: state.countShapes,
            x: point.x,
            y: point.y,
            r: 50,
            tipo: state.objects[1].base,
          };
          Vue.set(state.objects, shape.id, shape);
        }
      }
      state.showMenuShape = false;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
