<template>
  <button v-bind:class="hoge">{{text}}</button>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';

type ButtonSize = 'small' | 'large';
type ButtonType = 'primary' | 'error' | 'warning';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    text: {type: String, required: true},
    size:  String as PropType<ButtonSize>,
    types: String as PropType<ButtonType>
  },
  setup({text, size, types}) {
    return {
      text
    }
  }
});
</script>

<style scoped>

</style>