<template>
  <q-select
    lazy-rules
    square
    v-model="controlModel"
    :clearable="props.clearable"
    :label="props.label"
    :multiple="props.multiple"
    :options="props.options"
    :rules="props.rules"
    @update:model-value="onChange"
  ></q-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  clearable: boolean;
  field: string;
  label: string;
  modelValue: any;
  multiple: boolean;
  options: any;
  rules: any;
}

const emit = defineEmits(['valueCallback']);
const props = withDefaults(defineProps<Props>(), {
  clearable: true,
  field: '',
  label: '',
  modelValue: null,
  multiple: false,
  options: [],
  rules: [],
});
const controlModel = ref(props.modelValue || null);

const onChange = (value: any) => {
  controlModel.value = value;
  emit('valueCallback', value, props.field);
};
</script>
