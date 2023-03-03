<template>
  <div class="q-pa-md">
    <q-table
      row-key="name"
      :columns="headers"
      :filter="filter"
      :pagination="initialPagination"
      :rows="items"
      :title="title"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <template v-for="header in headers" :key="header.name">
            <q-td :props="props">
              {{ props.row[header.name] }}
            </q-td>
          </template>
          <q-td>
            <span class="q-mr-sm">
              <my-button
                label=""
                icon="edit"
                @click="onEditClick(props.row.id)"
              >
                <q-tooltip>Edit "{{ props.row.value }}"</q-tooltip>
              </my-button>
            </span>
            <my-button label="" icon="delete" @click="alert(props.row.id)">
              <q-tooltip>Edit "{{ props.row.value }}"</q-tooltip>
            </my-button>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import MyButton from '../MyButton.vue';

const emit = defineEmits(['editCallback', 'removeCallback']);
const props = defineProps<{
  headers: any[];
  items: any[];
  title: string;
}>();

const initialPagination = {
  rowsPerPage: 10,
};
const { headers = [], title = '' } = props;
const items = computed(() => props.items);

const filter = ref('');

const $q = useQuasar();
const alert = (id: string) => {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure to remove this vocabulary?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    onRemoveClick(id);
  });
};

const onEditClick = (id: string) => {
  emit('editCallback', id);
};
const onRemoveClick = (id: string) => {
  emit('removeCallback', id);
};
</script>
