<template>
  <div class="q-pa-md flex justify-end">
    <my-button
      color="primary"
      label=""
      icon="add"
      text-color="white"
      :action="handleAdd"
    >
      <q-tooltip>Add vocabulary</q-tooltip>
    </my-button>
  </div>
  <my-smart-table
    :headers="headers"
    :items="mutatedItems"
    :title="'Vocabulary'"
    @edit-callback="editCallback"
    @remove-callback="removeCallback"
  ></my-smart-table>
</template>

<script setup lang="ts">
import MyButton from 'src/components/MyButton.vue';
// import MyTableList from 'src/components/table/MyTableList.vue';
import MySmartTable from 'src/components/table/MySmartTable.vue';
import { useRouter } from 'vue-router';
import { vocabularyHeaders } from './data';
import { useVocabularyStore } from 'src/stores/vocabulary';
import { ref } from 'vue';

const vocabularyStore = useVocabularyStore();
const headers = vocabularyHeaders;
const { vocabularyList, removeVocabulary } = vocabularyStore;

const mutatedItems = ref(vocabularyList);
vocabularyStore.$subscribe((_, state) => {
  mutatedItems.value = [...state.vocabularyList];
});

const router = useRouter();
const handleAdd = () => {
  router.push('/vocabulary-add');
};
const editCallback = (id: string) => {
  router.push(`/vocabulary-edit/${id}`);
};
const removeCallback = (id: string) => {
  removeVocabulary(id);
};
</script>
