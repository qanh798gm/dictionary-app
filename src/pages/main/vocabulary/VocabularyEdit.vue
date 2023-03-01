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
                <q-form class="q-px-sm">
                  <my-input-control
                    clearable
                    field="value"
                    label="Word"
                    :modelValue="form.value"
                    @value-callback="valueCallback"
                    :rules="[required]"
                  ></my-input-control>

                  <my-select-control
                    clearable
                    field="type"
                    label="Type"
                    :modelValue="form.type"
                    :options="typeOptions"
                    :rules="[required]"
                    @value-callback="valueCallback"
                  >
                  </my-select-control>

                  <my-select-control
                    clearable
                    field="level"
                    label="Level"
                    :modelValue="form.level"
                    :options="levelOptions"
                    :rules="[required]"
                    @value-callback="valueCallback"
                  >
                  </my-select-control>

                  <my-input-area-control
                    clearable
                    field="description"
                    label="Description"
                    :modelValue="form.description"
                    @value-callback="valueCallback"
                    :rules="[required]"
                  ></my-input-area-control>
                </q-form>
              </q-card-section>

              <q-card-actions class="q-px-lg">
                <my-button
                  color="primary"
                  text-color="white"
                  label="Edit"
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
import MyInputControl from 'src/components/form/MyInputControl.vue';
import MyInputAreaControl from 'src/components/form/MyInputAreaControl.vue';
import MySelectControl from 'src/components/form/MySelectControl.vue';
import MyButton from 'src/components/MyButton.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { typeOptions, levelOptions } from './data';
import { useVocabularyStore } from 'src/stores/vocabulary';
import { Vocabulary } from './type';

const required = (val: any) => !!val || 'Field is required';

const router = useRouter();
const vocabularyStore = useVocabularyStore();
const { mutateVocabulary } = vocabularyStore;
const vocabularyId = router?.currentRoute?.value?.params?.id as string;

if (!vocabularyId) {
  router.push('/vocabulary-list');
}

const foundVocabulary = computed(() =>
  vocabularyStore.getVocabularyById(vocabularyId)
);

const title = ref('Edit Vocabulary');
const form = ref({
  id: foundVocabulary?.value?.id || '',
  value: foundVocabulary?.value?.value || '',
  type: foundVocabulary?.value?.type || '',
  level: foundVocabulary?.value?.level || '',
  description: foundVocabulary?.value?.description || '',
});

const valueCallback = (value: any, field: string) => {
  form.value = { ...form.value, [field]: value };
};

const onSubmit = () => {
  const newVocabulary: Vocabulary = {
    ...form.value,
  };

  mutateVocabulary(() => {
    router.push('/vocabulary-list');
  }, newVocabulary);
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
