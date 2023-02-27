<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left" style="font-weight: bold">No.</th>
          <template v-for="header in headers" :key="header.field">
            <th
              v-if="header.isPrimary"
              class="text-left"
              style="font-weight: bold"
            >
              {{ header.label }}
            </th>
            <th v-else class="text-middle">
              {{ header.label }}
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <template v-for="header in headers" :key="header.field">
            <td
              v-if="header.isPrimary"
              class="text-left"
              style="font-weight: bold"
            >
              {{ item[header.field] }}
            </td>
            <td v-else class="text-middle">{{ item[header.field] }}</td>
          </template>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
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
</style>
