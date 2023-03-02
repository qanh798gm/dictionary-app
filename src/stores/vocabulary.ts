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
    getVocabularyById: (state) => (id: string) => {
      return state.vocabularyList.find((vocabulary) => vocabulary.id === id);
    },
  },

  actions: {
    addVocabulary(callback: any, newVocabulary: Vocabulary) {
      const id =
        Math.max(
          ...this.vocabularyList?.map(
            (vocabulary: Vocabulary) => +vocabulary.id + 1
          )
        )?.toString() || '0';
      const vocabulary: Vocabulary = {
        ...newVocabulary,
        id,
      };
      this.vocabularyList.push(vocabulary);
      callback();
    },
    editVocabulary(callback: any, newVocabulary: Vocabulary) {
      const index = this.vocabularyList.findIndex(
        (vocabulary) => vocabulary.id === newVocabulary.id
      );
      const updatedVocabularyList = [...this.vocabularyList];
      updatedVocabularyList.splice(index, 1, newVocabulary);
      this.vocabularyList = updatedVocabularyList;
      callback();
    },
    removeVocabulary(id: string) {
      const index = this.vocabularyList.findIndex(
        (vocabulary) => vocabulary.id === id
      );
      const updatedVocabularyList = [...this.vocabularyList];
      updatedVocabularyList.splice(index, 1);
      this.vocabularyList = updatedVocabularyList;
    },
  },
});
