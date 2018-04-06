<template>
  <div class="columns is-gapless menu-superior">
    <div class="logo-bg column is-1"></div>
    <div class="column">
      <div class="titulo columns is-gapless">
        <div class="column is-size-5">
          <editable-label :field="titulo" />
        </div>
      </div>
      <div class="columns is-gapless">
        <div class="column">

          <nav class="level level-menu-superior">
            <!-- Left side -->
            <div class="level-left">
              <div class="level-item level-item-menu-superior">
                <a class="button is-small is-white">File</a>
              </div>
               <div class="level-item level-item-menu-superior">
                <a class="button is-small is-white">Edit</a>
              </div>
               <div class="level-item level-item-menu-superior">
                <a class="button is-small is-white">View</a>
              </div>
            </div>

            <div class="level-right">
            </div>
          </nav>

        </div>
      </div>
    </div>
    <div class="column is-1"></div>
  </div>
</template>
<script>
import EditableLabel from '@/components/form/EditableLabel';

export default {
  name: 'MenuSuperior',
  data() {
    return {
      titulo: 'Untitled Diagram.xml',
    };
  },
  components: {
    EditableLabel,
  },
};
</script>
