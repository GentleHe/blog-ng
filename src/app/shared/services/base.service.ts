import {Injectable} from '@angular/core';
import {BaseDTO, BaseVO, Pageable, Result} from "../domain";
import {Observable, switchMap} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface BaseInterface<DTO extends BaseDTO, VO extends BaseVO> {

  /**
   * 通过 id 查询数据详情
   * @param id
   */
  getDatum(id: number): Observable<Result>;

  /**
   * 列表查询
   * @param pageable 分页对象
   * @param baseDTO 传输层对象
   */
  getData(pageable: Pageable, baseDTO: BaseDTO): Observable<Result>;

  /**
   * 添加单条数据
   * （通过唯一ID确定，即除了ID和空字段，其它的全部覆盖更新）
   * @param data 传输层对象
   */
  addDatum(data: DTO): Observable<Result>;

  /**
   * 更改单条数据
   * @param data 传输层对象
   */
  updateDatum(data: DTO): Observable<Result>;

  /**
   * 删除所选的数据
   * @param ids
   */
  deleteData(ids: Set<Number>): Observable<Result>;

  /**
   * 删除单个数据
   * @param id
   */
  deleteDatum(id: number): Observable<Result>;

  /**
   * 指定列的对应值是否存在
   * 用途：如添加用户时，检测用户名、邮箱是否已经存在等的判定
   */
  columnDataExists(columnName: string, columnValue: any): Observable<Result>;
}


@Injectable({providedIn: 'root'})
export class BaseService<DTO extends BaseDTO, VO extends BaseVO> implements BaseInterface<DTO, VO> {

  //服务名
  serviceName?: string;

  baseUrl = `${environment.baseUrl}/`;

  constructor(protected http: HttpClient) {
    console.log('this.baseUrl: ' + this.baseUrl);
  }

  addDatum(data: DTO): Observable<Result> {
    const body = JSON.parse(JSON.stringify(data))
    console.log('body: ', body);
    // var headers = new HttpHeaders()
    // headers = headers.append("Content-Type", "application/json")

    return this.http.post<Result>(this.baseUrl + this.serviceName, body);
  }

  columnDataExists(columnName: string, columnValue: any): Observable<Result> {
    const url = `${this.baseUrl}${this.serviceName}/columnValueIsExists`;

    let params = new HttpParams()
      .append('column', columnName)
      .append('value', columnValue);

    return this.http.get<Result>(url, {params})
  }

  deleteData(ids: Set<Number>): Observable<Result> {
    var body = [...ids]
    return this.http.delete<Result>(`${this.baseUrl}${this.serviceName}`, {
      body
    });
  }

  deleteDatum(id: number): Observable<Result> {
    console.log(`${this.serviceName}: 即将删除ID为【${id}】的数据`);
    return this.http.delete<Result>(`${this.baseUrl}${this.serviceName}/${id}`);
  }

  getDatum(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}/id`);

  }

  getData(pageable: Pageable, baseDTO: DTO): Observable<Result> {

    // todo 记得补充

    let params = new HttpParams()
      .append('size', pageable.size)
      .append('page', pageable.page)

    for (let sortElement of pageable.sort) {
      if (sortElement.value) {
        params = params.append('sort', `${sortElement.key},${sortElement.value === 'ascend' ? 'asc' : 'desc'}`)
      }
    }


    for (let filterElement of pageable.filter) {
      if (filterElement.value !== null) {
        if (filterElement.value instanceof Array && filterElement.value.length > 0) {
          console.log(`filterElement.value: ${filterElement.value}`);
          params = params.append(filterElement.key, filterElement.value[0]);
        } else {
          console.log(`filterElement.value1: ${filterElement.value}`);
          params = params.append(filterElement.key, filterElement.value);
        }

      }
    }


    console.log(pageable)
    console.log('params: ' + JSON.stringify(params.keys()))


    var body = baseDTO;

    var headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")

    console.log(headers);
    console.log('body: ', body);
    var resultObservable = this.http.request<Result>('post', `${this.baseUrl}${this.serviceName}/list`, {
      params,
      headers,
      body
    },);


    return resultObservable;
  }

  updateDatum(data: DTO): Observable<Result> {

    const param = new HttpParams({fromString: JSON.stringify(data)})
    var headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    return this.http.put<Result>(`${this.baseUrl}${this.serviceName}/${data.id}`, data, {headers});
  }


  /**
   * 导出数据，提供分页参数和过滤参数
   * 此方法目前和查询方法逻辑保持一致，导出仅仅是把查询的数据从页面显示改为变成excel而已
   * @param pageable
   * @param baseDTO
   */
  exportData(pageable: Pageable, baseDTO: DTO) {
    let params = new HttpParams()
      .append('size', pageable.size)
      .append('page', pageable.page)

    for (let sortElement of pageable.sort) {
      if (sortElement.value) {
        params = params.append('sort', `${sortElement.key},${sortElement.value === 'ascend' ? 'asc' : 'desc'}`)
      }
    }


    for (let filterElement of pageable.filter) {
      if (filterElement.value !== null) {
        if (filterElement.value instanceof Array && filterElement.value.length > 0) {
          console.log(`filterElement.value: ${filterElement.value}`);
          params = params.append(filterElement.key, filterElement.value[0]);
        } else {
          console.log(`filterElement.value1: ${filterElement.value}`);
          params = params.append(filterElement.key, filterElement.value);
        }

      }
    }


    console.log(pageable)
    console.log('params: ' + JSON.stringify(params.keys()))


    var body = baseDTO;

    var headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/octet-stream")
    // headers = headers.append("Response-Type", "blob")

    console.log(headers);
    console.log('body: ', body);
    var resultObservable = this.http.get(`${this.baseUrl}${this.serviceName}/export`, {
      responseType: 'blob'
    })

    return resultObservable;
  }

  getImportDataUrl = () => {
    return this.baseUrl + this.serviceName + '/import'
  }
}
