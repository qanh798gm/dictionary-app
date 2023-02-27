<template><table-list :headers="headers" :items="data"></table-list></template>

<script setup>
import TableList from 'src/components/table/TableList.vue';
import { sampleVocabularyList, vocabularyHeaders } from './data';

const data = sampleVocabularyList;
const headers = vocabularyHeaders;
</script>
