<template>
  <thead>
    <tr>
      <th class="text-left" style="font-weight: bold">No.</th>
      <template v-for="header in headers" :key="header.field">
        <th v-if="header.isPrimary" class="text-left" style="font-weight: bold">
          {{ header.label }}
        </th>
        <th v-else class="text-middle">
          {{ header.label }}
        </th>
      </template>
      <th></th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
const props = defineProps<{
  headers: any[];
}>();

const { headers = [] } = props;
</script>
