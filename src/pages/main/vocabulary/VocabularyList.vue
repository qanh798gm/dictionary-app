<template>
  <div class="q-pa-md flex justify-end">
    <my-button label="Add" icon="add" :action="handleAdd"></my-button>
  </div>
  <my-table-list
    :headers="headers"
    :items="vocabularyList"
    @item-callback="itemCallback"
  ></my-table-list>
</template>

<script setup lang="ts">
import MyButton from 'src/components/MyButton.vue';
import MyTableList from 'src/components/table/MyTableList.vue';
import { useRouter } from 'vue-router';
import { vocabularyHeaders } from './data';
import { useVocabularyStore } from 'src/stores/vocabulary';

const vocabularyStore = useVocabularyStore();
const headers = vocabularyHeaders;
const { vocabularyList } = vocabularyStore;

const router = useRouter();
const handleAdd = () => {
  router.push('/vocabulary-add');
};

const itemCallback = (id: string) => {
  router.push(`/vocabulary-edit/${id}`);
};
</script>
