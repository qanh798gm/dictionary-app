<template><table-list :items="data"></table-list></template>
<script setup>
import TableList from 'src/components/table/TableList.vue';

const data = [
  {
    id: '0',
    value: 'budget',
    level: 'B2',
    countable: 'countable,  uncountable',
    description:
      'the money that is available to a person or an organization and a plan of how it will be spent over a period of time',
  },
];
</script>
