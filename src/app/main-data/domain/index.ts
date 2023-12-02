import {BaseVO, BaseDTO} from "../../shared";

export class DictionaryType{
    type!: string;
    label!: string;
    description?: string;
    builtIn: boolean = false;
}

export class DictionaryTypeVO extends BaseVO {
    type!: string;
    label!: string;
    description?: string;
    builtIn: boolean = false;
}

export class DictionaryTypeDTO extends BaseDTO {
    type?: string;
    label?: string;
    description?: string;
    builtIn?: boolean;
    labelLike?: string;
    createTimeBegin?: string;
    createTimeEnd?: string;
    updateTimeBegin?: string;
    updateTimeEnd?: string;
}
