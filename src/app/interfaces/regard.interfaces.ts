import { EQualifyAnswers, EQualifyType } from '../enums/regard.enum';

export interface IRegardItem {
  list: string[];
  qualifies: any[];
  _id: string;
  name: string;
  qualifyAmount: number;
  qualifyInProgress: boolean;
  author: string;
  created: string; // unix Data;
}

export interface IRegardItemPopulate extends Omit<IRegardItem, 'list'> {
  list: IRegardTextItem[];
}

export interface IRegardTextItem {
  _id: string;
  content: string;
  pronunciation: string;
  type: string; // Enum
  img: string;
  public_id: string;
  essential: boolean;
  created: string; // Data unix
  statistics: any;
  qualifies: any[];
  translation: string[];
  regards: string[];
  synonyms: string[];
}

export interface IRegardQualifyTextIds {
  textId: string;
  regardId: string;
  qualifyId: string;
}

export interface IQualify {
  _id: string;
  type: EQualifyType;
  regard: string;
  finished: boolean;
  finishedLap: boolean;
  progress: { [key: string]: number };
  stat: IStatTextQualify[];
  repeat: number;
  answersVariant: EQualifyAnswers;
  author: string;
  created: string;
}

export interface IQualifyItemizedText {
  qualify: IQualify;
  progress: number;
  stat: IStatTextQualify;
  text: IRegardTextItem;
}

export interface IStatTextQualify {
  amount: number;
  checkedAmount: number;
  finishedInQualify: boolean;
  lapChecked: boolean;
  obj: { [key: string]: number };
  textId: string;
}
