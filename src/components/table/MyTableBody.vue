<template>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.id }}</td>
      <template v-for="header in headers" :key="header.field">
        <td v-if="header.isPrimary" class="text-left" style="font-weight: bold">
          {{ item[header.field] }}
        </td>
        <td v-else class="td-text-middle">{{ item[header.field] }}</td>
      </template>
      <td>
        <my-button label="Edit" @click="onEditClick(item.id)"></my-button>
      </td>
      <td>
        <my-button label="Remove" @click="onRemoveClick(item.id)"></my-button>
      </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MyButton from '../MyButton.vue';

const emit = defineEmits(['editCallback', 'removeCallback']);
const props = defineProps<{
  headers: any[];
  items: any[];
}>();

const { headers = [] } = props;
const items = ref(props.items);
watch(props, () => {
  items.value = props.items;
});

const onEditClick = (id: string) => {
  emit('editCallback', id);
};
const onRemoveClick = (id: string) => {
  emit('removeCallback', id);
};
</script>
