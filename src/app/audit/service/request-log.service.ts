import { Injectable } from '@angular/core';
import {BaseService} from "../../shared";
import {RequestLogDTO, RequestLogVO} from "../domain";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestLogService extends BaseService<RequestLogDTO, RequestLogVO>{

  constructor(http: HttpClient) {
    super(http);
    super.serviceName='requestLog'
  }
}
