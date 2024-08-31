import { Injectable } from '@angular/core';
import {BaseService} from "../../shared";
import {DictionaryTypeDTO, DictionaryTypeVO} from "../domain";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DictionaryTypeService extends BaseService<DictionaryTypeDTO, DictionaryTypeVO>{

  constructor(http: HttpClient) {
    super(http)
    this.serviceName='dictionaryType'
    console.log(this.serviceName, ' init');
  }
}
