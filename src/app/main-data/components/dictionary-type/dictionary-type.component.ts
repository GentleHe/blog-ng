import { Component } from '@angular/core';
import {BaseComponent} from "../../../shared";
import {DictionaryTypeDTO, DictionaryTypeVO} from "../../domain";
import {ColumnItem} from "../../../shared";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dictionary-type',
  templateUrl: './dictionary-type.component.html',
  styleUrls: ['./dictionary-type.component.scss']
})
export class DictionaryTypeComponent extends BaseComponent<DictionaryTypeDTO, DictionaryTypeVO>{

  override baseDTO: DictionaryTypeDTO = new DictionaryTypeDTO();

  columnItems: ColumnItem[] = [];

  filterForm!: FormGroup;

  searchValue = '';


}
