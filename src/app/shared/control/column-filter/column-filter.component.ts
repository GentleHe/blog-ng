import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent {
  @Input() columnName: string = ''
  @Input() columnKey: string = ''
  searchValue: string = '';

  @Output() searchEmitter: EventEmitter<{ column: string, searchValue: string }> = new EventEmitter<any>();

  triggerSearch() {
    console.log(`${this.columnName}触发上层搜索，搜索${this.columnKey}值为[${this.searchValue}]的数据`);
    this.searchEmitter.emit({column: this.columnKey, searchValue: this.searchValue});
  }

  resetSearch() {
    this.searchValue=''
  }
}
