import {Component, OnInit} from '@angular/core';
import {BaseComponent, BaseService, ColumnItem, quickAddBasicItem, quickAddIdItem} from "../../../shared";
import {RequestLogDTO, RequestLogVO} from "../../domain";
import {NzMessageService} from "ng-zorro-antd/message";
import {RequestLogService} from "../../service/request-log.service";
import {FormBuilder} from "@angular/forms";
import {formatDate} from "../../../shared";

@Component({
  selector: 'app-request-log',
  templateUrl: './request-log.component.html',
  styleUrls: ['./request-log.component.scss']
})
export class RequestLogComponent extends BaseComponent<RequestLogDTO, RequestLogVO> implements OnInit{
  override baseDTO = new RequestLogDTO();
  // widthConfig: string[] = ['100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px'];
  widthConfig: string[] = ['30px','100px'];


  constructor(private requestLogService: RequestLogService, messageService: NzMessageService, private fb: FormBuilder) {
    super(requestLogService, messageService);
  }

  override ngOnInit() {
    // 表格字段声明
    this.columnItems = quickAddIdItem(this.columnItems);

    // this.columnItems.push(new ColumnItem("会话标识", 'sessionId'));
    this.columnItems.push(new ColumnItem("请求标识", 'requestId'));
    // this.columnItems.push(new ColumnItem("来源地址", 'ip'));
    this.columnItems.push(new ColumnItem("请求资源", 'url'));
    // this.columnItems.push(new ColumnItem("操作类型", 'type'));
    // this.columnItems.push(new ColumnItem("请求方式", 'way'));
    // this.columnItems.push(new ColumnItem("类路径", 'classPath'));
    // this.columnItems.push(new ColumnItem("方法名", 'methodName'));
    // this.columnItems.push(new ColumnItem("请求参数", 'param'));
    // this.columnItems.push(new ColumnItem("操作描述", 'operationComment'));
    // this.columnItems.push(new ColumnItem("操作类型", 'operationType'));
    this.columnItems.push(new ColumnItem("开始时间", 'startTime'));
    this.columnItems.push(new ColumnItem("完成时间", 'finishTime'));
    this.columnItems.push(new ColumnItem("返回时间", 'returnTime'));
    this.columnItems.push(new ColumnItem("异常中断", 'abort'));
    // this.columnItems.push(new ColumnItem("返回数据", 'returnData'));


    // 筛选表单组件声明
    this.filterForm.addControl('urlLike', this.fb.control(''))
    this.filterForm.addControl('startTimeRange', this.fb.control(''))
    this.filterForm.addControl('returnTimeRange', this.fb.control(''))
  }

  override search() {
    console.log('过滤表单提交搜索');
    this.baseDTO = this.filterForm.value;

    const startTimeRange: Date[] = this.filterForm.controls['startTimeRange'].value;
    if (startTimeRange && startTimeRange.length > 0) {
      this.baseDTO.startTimeBegin = formatDate(startTimeRange[0])
      this.baseDTO.startTimeEnd = formatDate(startTimeRange[1])
    }

    const returnTimeRange: Date[] = this.filterForm.controls['returnTimeRange'].value;
    if (returnTimeRange && returnTimeRange.length > 0) {
      this.baseDTO.returnTimeBegin = formatDate(returnTimeRange[0])
      this.baseDTO.returnTimeEnd = formatDate(returnTimeRange[1])
    }

    this.reloadData();
  }
}
