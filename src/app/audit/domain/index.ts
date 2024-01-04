import {BaseDTO, BaseVO} from "../../shared";


export class RequestLog{
  sessionId!: string;
  requestId!: string;
  ip!: string;
  url!: string;
  type!: number;
  way!: string;
  classPath!: string;
  methodName!: string;
  param!: string;
  operationComment!: string;
  operationType!: string;
  startTime!: number;
  finishTime!: number;
  returnTime!: number;
  abort!: boolean;
  returnData!: string;
}

export class ExceptionLog{

}

export class RequestLogDTO extends BaseDTO{
  sessionId!: string;
  requestId!: string;
  ip!: string;
  url!: string;
  type!: number;
  way!: string;
  classPath!: string;
  methodName!: string;
  param!: string;
  operationComment!: string;
  operationType!: string;
  startTime!: number;
  finishTime!: number;
  returnTime!: number;
  abort!: boolean;
  returnData!: string;

  startTimeBegin?: string;
  startTimeEnd?: string;
  returnTimeBegin?: string;
  returnTimeEnd?: string;
}

export class ExceptionLogDTO extends BaseDTO{

}

export class RequestLogVO extends BaseVO{
  sessionId!: string;
  requestId!: string;
  ip!: string;
  url!: string;
  type!: number;
  way!: string;
  classPath!: string;
  methodName!: string;
  param!: string;
  operationComment!: string;
  operationType!: string;
  startTime!: number;
  finishTime!: number;
  returnTime!: number;
  abort!: boolean;
  returnData!: string;
}

export class ExceptionLogVO extends BaseVO{

}
