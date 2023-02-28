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
  {
    id: '2',
    value: 'exactly',
    type: 'adverb',
    level: 'A2',
    countable: '',
    description:
      'used to emphasize that something is correct in every way or in every detail',
  },
  {
    id: '3',
    value: 'impossible',
    type: 'adjective',
    level: 'A2',
    countable: '',
    description: 'that cannot exist or be done; not possible',
  },
  {
    id: '4',
    value: 'predict',
    type: 'verb',
    level: 'A2',
    countable: '',
    description: 'to say that something will happen in the future',
  },
  {
    id: '5',
    value: 'earthquake',
    type: 'noun',
    level: 'B1',
    countable: 'countable',
    description: 'a sudden, violent shaking of the earth’s surface',
  },
  {
    id: '6',
    value: 'predict',
    type: 'verb',
    level: 'A2',
    countable: '',
    description:
      'the size or extent of something, especially when compared with something else',
  },
  {
    id: '7',
    value: 'town',
    type: 'noun',
    level: 'A1',
    countable: 'countable, uncoutable',
    description:
      'a place with many houses, shops, etc. where people live and work. It is larger than a village but smaller than a city',
  },
  {
    id: '8',
    value: 'rough',
    type: 'adjective',
    level: 'B1',
    countable: '',
    description: 'having a surface that is not even or regular',
  },
  {
    id: '9',
    value: 'knife',
    type: 'noun',
    level: 'A2',
    countable: '',
    description:
      'a sharp blade (= metal edge) with a handle, used for cutting or as a weapon',
  },
];
