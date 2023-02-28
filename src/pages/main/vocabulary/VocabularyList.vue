<template>
  <div class="q-pa-md flex justify-end">
    <my-button label="Add" icon="add" :action="handleAdd"></my-button>
  </div>
  <my-table-list :headers="headers" :items="data"></my-table-list>
</template>

<script setup>
import MyButton from 'src/components/MyButton.vue';
import MyTableList from 'src/components/table/MyTableList.vue';
import { useRouter } from 'vue-router';
import { sampleVocabularyList, vocabularyHeaders } from './data';

const data = sampleVocabularyList;
const headers = vocabularyHeaders;

const router = useRouter();
const handleAdd = () => {
  router.push('/vocabulary-add');
};
</script>
