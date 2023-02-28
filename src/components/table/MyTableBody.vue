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
        <my-button label="Edit"></my-button>
      </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
import MyButton from '../MyButton.vue';

const props = defineProps<{
  headers: any[];
  items: any[];
}>();

const { headers = [], items = [] } = props;
</script>
