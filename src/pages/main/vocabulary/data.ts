import { Vocabulary } from './type';

export const vocabularyHeaders = [
  {
    field: 'value',
    label: 'Word',
    isPrimary: true,
  },
  {
    field: 'type',
    label: 'Type',
  },
  {
    field: 'level',
    label: 'Level',
  },
  {
    field: 'countable',
    label: 'Countable',
  },
  {
    field: 'description',
    label: 'Description',
  },
];

export const sampleVocabularyList: Vocabulary[] = [
  {
    id: '0',
    value: 'budget',
    type: 'noun',
    level: 'B2',
    countable: 'countable,  uncountable',
    description:
      'the money that is available to a person or an organization and a plan of how it will be spent over a period of time',
  },
  {
    id: '1',
    value: 'aggregate',
    type: 'noun',
    level: 'C2',
    countable: 'countable',
    description:
      'a total number or amount made up of smaller amounts that are collected together',
  },
];
