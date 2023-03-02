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
        <span class="q-mr-sm">
          <my-button label="" icon="edit" @click="onEditClick(item.id)">
            <q-tooltip>Edit "{{ item.value }}"</q-tooltip>
          </my-button>
        </span>
        <my-button label="" icon="delete" @click="alert(item.id)">
          <q-tooltip>Remove "{{ item.value }}"</q-tooltip>
        </my-button>
      </td>
      <td></td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MyButton from '../MyButton.vue';
import { useQuasar } from 'quasar';

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

const $q = useQuasar();
const alert = (id: string) => {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure?',
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      onRemoveClick(id);
    })
    .onCancel(() => {
      // console.log('Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};

const onEditClick = (id: string) => {
  emit('editCallback', id);
};
const onRemoveClick = (id: string) => {
  emit('removeCallback', id);
};
</script>
