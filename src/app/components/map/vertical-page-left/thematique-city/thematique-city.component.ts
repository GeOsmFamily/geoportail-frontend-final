import { ComponentHelper } from './../../../../helpers/componentHelper';
import { StorageServiceService } from 'src/app/services/storage/storage-service.service';
import { Component } from '@angular/core';
import { GroupThematiqueInterface } from 'src/app/interfaces/groupeInterface';
import * as $ from 'jquery';
@Component({
  selector: 'app-thematique-city',
  templateUrl: './thematique-city.component.html',
  styleUrls: ['./thematique-city.component.scss'],
})
export class ThematiqueCityComponent {
  constructor(
    public storageService: StorageServiceService,
    public componentHelper: ComponentHelper
  ) {}

  openGroupThematiqueSlide(groupThematique: GroupThematiqueInterface) {
    this.componentHelper.openGroupThematiqueSlide(groupThematique);
  }
}
