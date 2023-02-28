<template>
  <q-btn
    :color="props.color"
    :text-color="props.textColor"
    :label="props.label"
    :icon="props.icon"
    @click="action"
  />
</template>

<script setup lang="ts">
interface Props {
  label: string;
  color: string;
  textColor: string;
  icon?: string;
  action: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Click',
  color: 'light',
  textColor: 'primary',
  icon: undefined,
  action: () => {
    return;
  },
});
</script>
