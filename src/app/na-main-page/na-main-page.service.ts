import { Injectable } from '@angular/core';
import {NaResource} from '../core/services/an-resource/na-resource';
import {IResourceMethod, ResourceAction, ResourceParams} from '@ngx-resource/core';

@Injectable()
@ResourceParams({pathPrefix: 'api'})
export class NaMainPageService extends NaResource{

  @ResourceAction({
  })getApi: IResourceMethod<null, any>

}
