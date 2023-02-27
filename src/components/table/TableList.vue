<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left" style="font-weight: bold">Word</th>
          <th class="text-middle">Type</th>
          <th class="text-middle">Level</th>
          <th class="text-middle">Countable</th>
          <th class="text-middle">Description</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr :v-for="vocab in props.items" :key="vocab.id">
          <td class="text-left" style="font-weight: bold">{{ vocab.value }}</td>
          <td
            class="text-middle"
            style="text-align: center; vertical-align: middle"
          >
            {{ vocab.type }}
          </td>
          <td
            class="text-middle"
            style="text-align: center; vertical-align: middle"
          >
            {{ vocab.level }}
          </td>
          <td
            class="text-middle"
            style="text-align: center; vertical-align: middle"
          >
            {{ vocab.countable }}
          </td>
          <td
            class="text-middle"
            style="text-align: center; vertical-align: middle"
          >
            {{ vocab.description }}
          </td>
        </tr> -->
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup lang="ts">
import { Vocabulary } from 'src/pages/main/vocabulary/type';
import { defineComponent } from 'vue';

interface Props {
  items: Vocabulary[];
}
// const props = defineProps(['items'])
defineProps<{
  items: Vocabulary[];
}>();
</script>
