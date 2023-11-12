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
  createTime?: number;
  updateTime?: number;
  createBy?: string;
  updateBy?: string;
}


export class BaseVO {
  id?: number;
  createTime?: number;
  updateTime?: number;
  createBy?: string;
  updateBy?: string;
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
