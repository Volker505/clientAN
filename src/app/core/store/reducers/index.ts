import * as Section from './section.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';


export interface MainState {
  section: Section.SectionsState;

}

export const mainRedusers: ActionReducerMap<MainState> = {
  section: Section.reducer

};

export const getSectionState = createFeatureSelector<Section.SectionsState>('section');

export const getIds = createSelector(
  getSectionState,
  Section.getIds
);

export const getSections = createSelector(
  getSectionState,
  Section.getSections
);



