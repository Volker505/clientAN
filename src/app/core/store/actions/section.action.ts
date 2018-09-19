import {Action} from '@ngrx/store';
import {Section} from '../../models/section.model';


export const ActionTypeSection = {
  SELECT_SECTION:    '[SECTION]SELECT',
  ONLOAD_SECTION: '[SECTION]ONLOAD'
};

export class SelectSection implements Action{
  readonly type: string = ActionTypeSection.SELECT_SECTION;

  constructor(public payload: number){}// найти по id
}
export class OnloadSection implements Action{
  readonly type: string = ActionTypeSection.ONLOAD_SECTION;

  constructor(public payload?: number){}
}


export type Actions = SelectSection | OnloadSection
