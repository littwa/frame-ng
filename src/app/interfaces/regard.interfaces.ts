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
