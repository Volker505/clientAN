import {Section} from '../../models/section.model';
import * as SectionActions from './../actions/section.action'

export interface SectionsState {
  ids: number[];
  sections: {[id: number]: Section};
}

const initialStore: SectionsState = {
  ids : [1, 2, 3],
  sections: {
    1: {
      photo: '',
      text: '',
      title: 'VK Все что вам нужно знать про наше взаимодействие',
      url: ''
    },
    2: {
      photo: '',
      text: '',
      title: 'HB Все что вам нужно знать про наше взаимодействие',
      url: ''
    },
    3: {
      photo: '',
      text: '',
      title: 'FB Все что вам нужно знать про наше взаимодействие',
      url: ''
    }
  }
};

export function reducer(state: SectionsState = initialStore, action: SectionActions.Actions) {
  switch (action.type) {
    case SectionActions.ActionTypeSection.SELECT_SECTION: {
      const id = action.payload;
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

export const getIds = (state: SectionsState) => state.ids;
export const getSections = (state: SectionsState) => state.sections;
