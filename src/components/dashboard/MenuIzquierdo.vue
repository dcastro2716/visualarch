<template>
  <aside class="menu menu-izquierdo">
    <p class="menu-label">
      Formas Básicas
    </p>
    <ul class="menu-list">
      <li>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child" @mousedown="mousedown($event, 'Rectangle')" @mouseup="mouseup" id="menu_rectangle" style="pointer-events:auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" style="pointer-events:none">
                <rect x="45" y="15" width="40" height="40" fill="red"></rect>
              </svg>
              <p class="has-text-centered" style="pointer-events:none">Rectángulo</p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child" @mousedown="mousedown($event, 'Circle')">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70">
                <circle cx="70" cy="35" r="20" style="stroke: #000;" fill="red" />
              </svg>
              <p class="has-text-centered">Circulo</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: 'MenuIzquierdo',
  methods: {
    mousedown(event, base) {
      this.$store.commit('updateShowMenuShape', {
        x: event.clientX,
        y: event.clientY,
        base,
      });
      this.$store.commit('setIdDrag', 1);
    },
    mouseup() {
      console.log('mouseup');
    },
  },
};
</script>
