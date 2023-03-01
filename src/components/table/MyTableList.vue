<template>
  <div class="q-pa-md">
    <q-markup-table>
      <my-table-header :headers="headers"></my-table-header>
      <my-table-body
        :headers="headers"
        :items="items"
        @edit-callback="editCallback"
        @remove-callback="onRemoveClick"
      ></my-table-body>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import MyTableHeader from './MyTableHeader.vue';
import MyTableBody from './MyTableBody.vue';
import { ref, watch } from 'vue';

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

const editCallback = (id: string) => {
  emit('editCallback', id);
};
const onRemoveClick = (id: string) => {
  emit('removeCallback', id);
};
</script>

<style>
.td-text-middle {
  text-align: center;
  vertical-align: middle;
}
</style>
