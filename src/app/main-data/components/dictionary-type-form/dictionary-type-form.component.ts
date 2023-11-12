import {Component} from '@angular/core';
import {BaseFormComponent} from "../../../shared";
import {DictionaryTypeDTO} from "../../domain";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../system/services";
import {NzMessageService} from "ng-zorro-antd/message";
import {User} from "../../../system/domain";


export class DictionaryTypeValidateForm extends FormGroup {


}

@Component({
    selector: 'app-dictionary-type-form',
    templateUrl: './dictionary-type-form.component.html',
    styleUrls: ['./dictionary-type-form.component.scss']
})
export class DictionaryTypeFormComponent extends BaseFormComponent<DictionaryTypeDTO> {

    listOfControl: Array<{ controlLabel: string, controlKey: string }> = []

    // override validateForm: FormGroup<{
    //     id: FormControl<number|null>,
    //     key: FormControl<string|null>,
    //     value: FormGroup<string>,
    //     description: FormGroup<string>,
    //     lockFlag: FormGroup<boolean>,
    //     status: FormGroup<string>,
    // }>

    constructor(fb: FormBuilder, private userService: UserService, message: NzMessageService) {
        super(new DictionaryTypeDTO(), fb, userService, message);

        this.validateForm = this.fb.group({
            id: new FormControl({value: '保存后自动生成', disabled: true}),
            // key: ['', [Validators.required]],
            // value: ['', [Validators.required]],
            // description: ['', [Validators.required]],
            // lockFlag: ['', [Validators.required]],
            // status: ['', [Validators.required]],
        })

        this.listOfControl.push({controlKey: 'type', controlLabel: '字典组分类'})
        this.listOfControl.push({controlKey: 'label', controlLabel: '字典组名'})

        for (let control of this.listOfControl) {
            this.validateForm.addControl(control.controlKey, this.fb.control(''))
        }
        this.validateForm.addControl('lockFlag', this.fb.control('false'))

        this.validateForm.controls['type'].addValidators(Validators.required)


        console.log('this.validateForm: ', this.validateForm);
    }
}
