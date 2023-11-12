import {Result} from "../domain";

/**
 * 判断结果是否OK
 * @param result
 */
export function isRequestSuccess(result: Result):boolean{
    if (result.status !== 200) {
        return false;
    }
    return true;
}

