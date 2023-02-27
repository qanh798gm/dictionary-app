<template>
  <div>
    <div>
      <label>{{ count }}</label>
    </div>
    <div>
      <MyButton :label="'Increase'" :action="increment"></MyButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from 'src/stores/counter';
import { computed } from 'vue';
import MyButton from './MyButton.vue';

const store = useCounterStore();
const count = computed(() => store.count);
const { increment } = store;
</script>
