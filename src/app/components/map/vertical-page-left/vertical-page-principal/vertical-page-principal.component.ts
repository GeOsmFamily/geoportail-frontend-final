import { Map } from 'src/app/modules/ol';
import { StorageServiceService } from './../../../../services/storage/storage-service.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  CarteInterface,
  GroupCarteInterface,
} from 'src/app/interfaces/carteInterface';
import { MapHelper } from 'src/app/helpers/mapHelper';
import { environment } from 'src/environments/environment';
import { GroupThematiqueInterface } from 'src/app/interfaces/groupeInterface';
import { ComponentHelper } from 'src/app/helpers/componentHelper';

@Component({
  selector: 'app-vertical-page-principal',
  templateUrl: './vertical-page-principal.component.html',
  styleUrls: ['./vertical-page-principal.component.scss'],
})
export class VerticalPagePrincipalComponent {
  donnePrincipalMap:
    | {
        groupCarte: GroupCarteInterface;
        carte: CarteInterface;
      }
    | null
    | undefined;

  environment;

  ghostMap;
  @Input() map: Map | undefined;

  groupCarte: GroupCarteInterface | undefined;

  constructor(public storageService: StorageServiceService) {
    this.groupCarte = storageService.getAllGroupCarte()[0];
  }
}
