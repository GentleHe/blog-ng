import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  BaseComponent,
  BaseService,
  ColumnFilterComponent,
  ColumnItem,
  quickAddBasicItem,
  quickAddIdItem
} from "../../../shared";
import {DictionaryType, DictionaryTypeDTO, DictionaryTypeVO} from "../../domain";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FruitService} from "../../../other";
import {DictionaryTypeService} from "../../service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Format} from "@angular-devkit/build-angular/src/builders/extract-i18n/schema";
import {formatDate, formatDateTime} from "../../../shared";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-dictionary-type',
  templateUrl: './dictionary-type.component.html',
  styleUrls: ['./dictionary-type.component.scss']
})
export class DictionaryTypeComponent extends BaseComponent<DictionaryTypeDTO, DictionaryTypeVO>
  implements OnInit {

  override baseDTO: DictionaryTypeDTO = new DictionaryTypeDTO();



  constructor(private dictionaryTypeService: DictionaryTypeService, messageService: NzMessageService, private fb: FormBuilder) {
    super(dictionaryTypeService, messageService);
  }


  override ngOnInit() {
    // 表格字段声明
    this.columnItems = quickAddIdItem(this.columnItems);
    this.columnItems.push(new ColumnItem("字典分类key", 'type').setFilterShow());
    this.columnItems.push(new ColumnItem("字典分类标签", 'label'));
    this.columnItems.push(new ColumnItem("字典分类描述", 'description').setFilterShow());
    this.columnItems.push(new ColumnItem("是否内置", 'builtIn'));
    this.columnItems = quickAddBasicItem(this.columnItems)


    // 筛选表单组件声明
    this.filterForm.addControl('labelLike', this.fb.control(''))
    this.filterForm.addControl('createTimeRange', this.fb.control(''))
    this.filterForm.addControl('updateTimeRange', this.fb.control(''))
  }








  /**
   * 处理字段过滤器搜索
   * @param event
   */
  override handleFilterSearch(event: { column: string; searchValue: string }) {
    console.log('$event: ', event);

    // 重置筛选对象
    this.baseDTO = new DictionaryTypeDTO();

    var arr = Object.entries(event);
    // this.baseDTO[arr[0][1]] = arr[1][1]
    this.baseDTO[event.column] = event.searchValue

    console.log('this.baseDTO: ', this.baseDTO);
    this.reloadData();
  }


  protected readonly environment = environment;
}
