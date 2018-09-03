import {Injectable} from '@angular/core';
import {Resource, ResourceHandler, ResourceParams} from '@ngx-resource/core';
import {environment} from '../../../../environments/environment';

@Injectable() @ResourceParams({url: environment.host})
export class NaResource extends Resource{

  constructor(resource: ResourceHandler) {
    super(resource);
  }

}
