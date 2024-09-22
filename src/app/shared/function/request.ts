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

