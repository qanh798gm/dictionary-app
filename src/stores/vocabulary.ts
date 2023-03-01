import { defineStore } from 'pinia';
import { sampleVocabularyList } from 'src/pages/main/vocabulary/data';
import { Vocabulary } from '../pages/main/vocabulary/type';

export type VocabularyState = {
  vocabularyList: Vocabulary[];
};

export const useVocabularyStore = defineStore('vocabulary', {
  state: () =>
    ({
      vocabularyList: sampleVocabularyList || [],
    } as VocabularyState),

  getters: {
    // vocabularyList(state) {
    //   console.log(state);
    //   return state.vocabularyList;
    // },
  },

  actions: {
    addVocabulary(callback: any, newVocabulary: Vocabulary) {
      const newId =
        Math.max(
          ...this.vocabularyList?.map(
            (vocabulary: Vocabulary) => +vocabulary.id + 1
          )
        )?.toString() || '0';
      const vocabulary: Vocabulary = {
        ...newVocabulary,
        id: newId,
      };
      this.vocabularyList.push(vocabulary);
      callback();
    },
  },
});
