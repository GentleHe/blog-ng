import {Component, OnInit} from '@angular/core';
import {BaseComponent, BaseService, ColumnItem, quickAddBasicItem, quickAddIdItem} from "../../../shared";
import {DictionaryTypeDTO, DictionaryTypeVO} from "../../domain";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FruitService} from "../../../other";
import {DictionaryTypeService} from "../../service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Format} from "@angular-devkit/build-angular/src/builders/extract-i18n/schema";
import {formatDate, formatDateTime} from "../../../shared/functions";

@Component({
  selector: 'app-dictionary-type',
  templateUrl: './dictionary-type.component.html',
  styleUrls: ['./dictionary-type.component.scss']
})
export class DictionaryTypeComponent extends BaseComponent<DictionaryTypeDTO, DictionaryTypeVO>
  implements OnInit {

  override baseDTO: DictionaryTypeDTO = new DictionaryTypeDTO();

  columnItems: ColumnItem[] = [];

  filterForm: FormGroup = new FormGroup({});

  searchValue = '';


  constructor(private dictionaryTypeService: DictionaryTypeService, messageService: NzMessageService, private fb: FormBuilder) {
    super(dictionaryTypeService, messageService);
  }


  override ngOnInit() {
    // 表格字段声明
    this.columnItems = quickAddIdItem(this.columnItems);
    this.columnItems.push(new ColumnItem("字典分类key", 'type'));
    this.columnItems.push(new ColumnItem("字典分类标签", 'label'));
    this.columnItems.push(new ColumnItem("字典分类描述", 'description'));
    this.columnItems.push(new ColumnItem("是否内置", 'builtIn'));
    this.columnItems = quickAddBasicItem(this.columnItems)

    // 筛选表单组件声明
    this.filterForm.addControl('labelLike', this.fb.control(''))
    this.filterForm.addControl('createTimeRange', this.fb.control(''))
    this.filterForm.addControl('updateTimeRange', this.fb.control(''))
  }

  search() {
    this.baseDTO = this.filterForm.value;


    var createTimeRange: Date[] = this.filterForm.controls['createTimeRange'].value;
    if (createTimeRange.length > 0) {
      this.baseDTO.createTimeBegin = formatDate(createTimeRange[0])
      this.baseDTO.createTimeEnd = formatDate(createTimeRange[1])
    }

    var updateTimeRange: Date[] = this.filterForm.controls['updateTimeRange'].value;
    if (updateTimeRange.length > 0) {
      this.baseDTO.updateTimeBegin = formatDate(updateTimeRange[0])
      this.baseDTO.updateTimeEnd = formatDate(updateTimeRange[1])
    }

    console.log(this.filterForm.value);

    console.log(this.baseDTO);
    this.reloadData();
  }

  /**
   * 重新加载数据（强制刷新缓存）
   */
  reloadData() {
    console.log('重新加载数据，刷新缓存');
    this.loadDataFromServer(this.pageable);
  }


  handleDataRefresh(event: any) {
    console.log('event: ', event);
    this.reloadData();
  }
}
