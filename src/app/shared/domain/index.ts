import {NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd/tree";
import {NzTreeBaseService} from "ng-zorro-antd/core/tree";
import {NzSafeAny} from "ng-zorro-antd/core/types";

export interface Result {
  status: number;
  message: string;
  data: any;
}

export class Pageable {
  page: number = 0;
  size: number = 5;
  sort: Array<{ key: string; value: string | 'ascend' | 'descend' | null }> = [];
  filter: Array<{ key: string; value: any | any[] }> = [];


  constructor(page: number, size: number, sort: Array<{
    key: string;
    value: "ascend" | "descend" | null
  }>, filter: Array<{ key: string; value: any }>) {
    this.page = page;
    this.size = size;
    this.sort = sort;
    this.filter = filter;
  }
}


export class BaseDTO {
  id?: number;
  createTime!: number;
  updateTime!: number;
  createBy!: string;
  updateBy!: string;
  createTimeBegin?: string;
  createTimeEnd?: string;
  updateTimeBegin?: string;
  updateTimeEnd?: string;
  // 字符串的索引签名，这样的话就能允许  this.baseDTO['createBy']='hgf'的方式来给createBy赋值了
  [key: string]: any;
}


export class BaseVO {
  id!: number;
  createTime?: number;
  updateTime?: number;
  createBy?: string;
  updateBy?: string;

  // 字符串的索引签名，这样的话就能允许  this.baseDTO['createBy']='hgf'的方式来给createBy赋值了
  [key: string]: any;
}

export class ColumnItem {
  name!: string;
  key!: string;
  sortFn: boolean = true;
  sortPriority: boolean = true;
  showFilter: boolean = false;
  filterFn: boolean = true;
  filters: Array<{ text: string; value: any }> = [];
  filterMultiple: boolean = false;

  setFilterShow(): ColumnItem {
    this.showFilter = true;
    return this
  }

  constructor(name: string, key: string) {
    this.name = name;
    this.key = key;
  }


}

export function quickAddIdItem(columnItems: ColumnItem[]): ColumnItem[] {
  const basicColumnItemId = new ColumnItem('编号', 'id');
  columnItems.push(basicColumnItemId);
  return columnItems;
}

export function quickAddBasicItem(columnItems: ColumnItem[]): ColumnItem[] {
  const basicColumnItemCreateBy = new ColumnItem('创建人', 'createBy');
  columnItems.push(basicColumnItemCreateBy);
  const basicColumnItemCreateTime = new ColumnItem('创建时间', 'createTime');
  columnItems.push(basicColumnItemCreateTime);
  const basicColumnItemUpdateBy = new ColumnItem('更新人', 'updateBy');
  columnItems.push(basicColumnItemUpdateBy);
  const basicColumnItemUpdateTime = new ColumnItem('更新时间', 'updateTime');
  columnItems.push(basicColumnItemUpdateTime);
  return columnItems;
}

export class SelectTree implements NzTreeNodeOptions {
  [key: string]: NzSafeAny;

  key!: string;
  title!: string;
  value!: string;
  icon!: string;
  isLeaf = false
  children: any[] = []


}
