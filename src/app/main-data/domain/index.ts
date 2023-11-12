import {BaseVO, BaseDTO} from "../../shared";

export class DictionaryType{
    key!: string;
    value!: string;
    description?: string;
    lockFlag: boolean = false;
    status?: string;
}

export class DictionaryTypeVO extends BaseVO {
    key!: string;
    value!: string;
    description?: string;
    lockFlag: boolean = false;
    status?: string;
}

export class DictionaryTypeDTO extends BaseDTO {
    key!: string;
    value!: string;
    description?: string;
    lockFlag: boolean = false;
    status?: string;
}
