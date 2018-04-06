<template>
  <div>
    <a class="button is-white is-medium " v-show="toggle" @dblclick="toggle=!toggle">{{field}}</a>
    <input class="input" v-show="!toggle" @keyup.enter="toggle=!toggle" v-model="field"/>
  </div>
</template>
<script>
export default {
  name: 'EditableLabel',
  props: ['field'],
  data() {
    return {
      toggle: true,
    };
  },
};
</script>
