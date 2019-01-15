import {Injectable} from '@angular/core';
import {Resource, ResourceHandler, ResourceParams} from '@ngx-resource/core';
import {environment} from '../../../../environments/environment';

@Injectable({ providedIn: 'root'}) @ResourceParams({url: environment.hostChat})
export class NaResourceChat extends Resource{

  constructor(resource: ResourceHandler) {
    super(resource);
  }

}
