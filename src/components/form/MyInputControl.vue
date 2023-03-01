<template>
  <q-input
    lazy-rules
    square
    v-model="controlModel"
    :clearable="props.clearable"
    :label="props.label"
    :rules="props.rules"
    @update:model-value="onChange"
  >
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  clearable: boolean;
  field: string;
  label: string;
  modelValue: any;
  rules: any;
}

const emit = defineEmits(['valueCallback']);
const props = withDefaults(defineProps<Props>(), {
  clearable: true,
  field: '',
  label: '',
  modelValue: null,
  rules: [],
});
const controlModel = ref(props.modelValue || null);

const onChange = (value: any) => {
  controlModel.value = value;
  emit('valueCallback', value, props.field);
};
</script>
