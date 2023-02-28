<template>
  <div class="q-pa-md">
    <q-markup-table>
      <my-table-header :headers="headers"></my-table-header>
      <my-table-body :headers="headers" :items="items"></my-table-body>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import MyTableHeader from './MyTableHeader.vue';
import MyTableBody from './MyTableBody.vue';

const props = defineProps<{
  headers: any[];
  items: any[];
}>();

const { headers = [], items = [] } = props;
</script>

<style>
.td-text-middle {
  text-align: center;
  vertical-align: middle;
}

.my-table {
}
</style>
