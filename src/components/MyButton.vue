<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      color="white"
      text-color="black"
      :label="props.label"
      @click="action"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  action: () => void;
}
const props = withDefaults(defineProps<Props>(), {
  label: 'Click',
  action: () => {
    return;
  },
});
</script>
