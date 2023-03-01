<template>
  <div class="q-pa-md">
    <q-markup-table>
      <my-table-header :headers="headers"></my-table-header>
      <my-table-body
        :headers="headers"
        :items="items"
        @item-callback="itemCallback"
      ></my-table-body>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import MyTableHeader from './MyTableHeader.vue';
import MyTableBody from './MyTableBody.vue';

const emit = defineEmits(['itemCallback']);
const props = defineProps<{
  headers: any[];
  items: any[];
}>();

const { headers = [], items = [] } = props;

const itemCallback = (id: string) => {
  emit('itemCallback', id);
};
</script>

<style>
.td-text-middle {
  text-align: center;
  vertical-align: middle;
}
</style>
