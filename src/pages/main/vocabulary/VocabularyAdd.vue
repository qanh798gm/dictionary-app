<template>
  <q-layout view="lHh Lpr fff">
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card
              square
              class="shadow-24"
              style="width: 400px; height: 700px"
            >
              <q-card-section class="card-color">
                <h4 class="text-h5 text-white q-my-md">{{ title }}</h4>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input
                    :ref="form.value"
                    square
                    clearable
                    v-model="form.value"
                    lazy-rules
                    label="Word"
                    :rules="[(val) => !!val || 'Value is required']"
                  >
                  </q-input>
                  <q-select
                    :options="typeOptions"
                    :ref="form.type"
                    square
                    clearable
                    v-model="form.type"
                    lazy-rules
                    label="Type"
                    :rules="[(val) => !!val || 'Type is required']"
                  >
                  </q-select>
                  <q-select
                    :options="levelOptions"
                    :ref="form.level"
                    square
                    clearable
                    v-model="form.level"
                    lazy-rules
                    label="Level"
                    :rules="[(val) => !!val || 'Level is required']"
                  >
                  </q-select>
                  <q-input
                    :ref="form.description"
                    square
                    clearable
                    type="textarea"
                    v-model="form.description"
                    lazy-rules
                    label="Description"
                    :rules="[(val) => !!val || 'Description is required']"
                  >
                  </q-input>
                  <q-select
                    :options="countableOptions"
                    :ref="form.countable"
                    multiple
                    square
                    clearable
                    v-model="form.countable"
                    lazy-rules
                    label="Countable"
                  >
                  </q-select>
                </q-form>
              </q-card-section>

              <q-card-actions class="q-px-lg">
                <my-button
                  color="primary"
                  text-color="white"
                  label="Add"
                  @click="onSubmit"
                ></my-button>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MyButton from 'src/components/MyButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { typeOptions, levelOptions, countableOptions } from './data';

const router = useRouter();

const title = ref('Add Vocabulary');
const username = ref('');
const form = ref({
  value: '',
  type: '',
  level: '',
  countable: [],
  description: '',
});

const onSubmit = () => {
  console.log(form.value);
};
</script>

<style lang="scss">
.my-login-card {
  min-width: 400px;
}

.card-color {
  background-color: $primary;
}
</style>
