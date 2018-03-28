const state = {
  objects: {
    1: { id: 1, x: 0, y: 0, dx: 0, dy: 0, width: 100, height: 100, tipo: 'Rectangle' },
    2: { id: 2, x: 0, y: 200, dx: 0, dy: 0, r: 40, tipo: 'Circle' },
  },
  selected: [],
};

const getters = {
  objects: state => state.objects,
  objectsArray: state => Object.values(state.objects || {}).map(obj => obj),
  selected: state => state.selected,
};

// actions
const actions = {};

// mutations
const mutations = {
  setXY(state, point) {
    const obj = state.selected.find(e => e.id == point.id);
    state.objects[point.id].x = obj.dx + point.dx;
    state.objects[point.id].y = obj.dy + point.dy;
  },
  setSelected(state, selected) {
    state.selected = [];
    state.selected.push({
      id: selected.id,
      dx: state.objects[selected.id].x,
      dy: state.objects[selected.id].y,
    });
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
