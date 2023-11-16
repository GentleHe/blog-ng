import {Component, OnInit} from '@angular/core';
import {BaseComponent, BaseService, ColumnItem, quickAddBasicItem, quickAddIdItem} from "../../../shared";
import {DictionaryTypeDTO, DictionaryTypeVO} from "../../domain";
import {FormGroup} from "@angular/forms";
import {FruitService} from "../../../other";
import {DictionaryTypeService} from "../../service";
import {NzMessageService} from "ng-zorro-antd/message";

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


    constructor(private dictionaryTypeService: DictionaryTypeService, messageService: NzMessageService) {
        super(dictionaryTypeService, messageService);
    }


    override ngOnInit() {
        this.columnItems = quickAddIdItem(this.columnItems);
        this.columnItems.push(new ColumnItem("字典分类key", 'type'));
        this.columnItems.push(new ColumnItem("字典分类标签", 'label'));
        this.columnItems.push(new ColumnItem("字典分类描述", 'description'));
        this.columnItems.push(new ColumnItem("是否内置", 'builtIn'));
        this.columnItems = quickAddBasicItem(this.columnItems)

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
