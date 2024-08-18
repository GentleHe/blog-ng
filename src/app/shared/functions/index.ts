import {Result} from "../domain";
import {REQUEST_OK} from "../constant";

/**
 * 判断结果是否OK
 * @param result
 */
export function isRequestSuccess(result: Result): boolean {
  if (result.code !== REQUEST_OK) {
    return false;
  }
  return true;
}

export function formatDateTime(date: Date): string {

  var year = date.getFullYear(); // 获取年份
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // 获取月份。注意，月份从0开始，所以需要加1，并且用("0" + 月份).slice(-2)确保总是两位数
  var day = ("0" + date.getDate()).slice(-2); // 获取日期。用("0" + 日期).slice(-2)确保总是两位数
  var hours = ("0" + date.getHours()).slice(-2); // 获取小时。用("0" + 小时).slice(-2)确保总是两位数
  var minutes = ("0" + date.getMinutes()).slice(-2); // 获取分钟。用("0" + 分钟).slice(-2)确保总是两位数
  var seconds = ("0" + date.getSeconds()).slice(-2); // 获取秒数。用("0" + 秒数).slice(-2)确保总是两位数

// 日期格式化
  var formattedDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  return formattedDate;
}

export function formatDate(date: Date): string {

  var year = date.getFullYear(); // 获取年份
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // 获取月份。注意，月份从0开始，所以需要加1，并且用("0" + 月份).slice(-2)确保总是两位数
  var day = ("0" + date.getDate()).slice(-2); // 获取日期。用("0" + 日期).slice(-2)确保总是两位数
  var hours = ("00");
  var minutes = ("00");
  var seconds = ("00");

// 日期格式化
  var formattedDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  return formattedDate;
}
