import {Component} from '@angular/core';
import {BaseFormComponent} from "../../../shared";
import {DictionaryTypeDTO} from "../../domain";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../system/services";
import {NzMessageService} from "ng-zorro-antd/message";
import {User} from "../../../system/domain";
import {DictionaryTypeService} from "../../service";


export class DictionaryTypeValidateForm extends FormGroup {


}

@Component({
    selector: 'app-dictionary-type-form',
    templateUrl: './dictionary-type-form.component.html',
    styleUrls: ['./dictionary-type-form.component.scss']
})
export class DictionaryTypeFormComponent extends BaseFormComponent<DictionaryTypeDTO> {

    listOfControl: Array<{ controlLabel: string, controlKey: string, required: boolean }> = []



    // override validateForm: FormGroup<{
    //     id: FormControl<number|null>,
    //     key: FormControl<string|null>,
    //     value: FormGroup<string>,
    //     description: FormGroup<string>,
    //     lockFlag: FormGroup<boolean>,
    //     status: FormGroup<string>,
    // }>

    constructor(fb: FormBuilder, private dictionaryTypeService: DictionaryTypeService, message: NzMessageService) {
        super(new DictionaryTypeDTO(), fb, dictionaryTypeService, message);

        this.validateForm = this.fb.group({
            id: new FormControl({value: '保存后自动生成', disabled: false}),
            // key: ['', [Validators.required]],
            // value: ['', [Validators.required]],
            // description: ['', [Validators.required]],
            // lockFlag: ['', [Validators.required]],
            // status: ['', [Validators.required]],
        })

        this.listOfControl.push({controlKey: 'type', controlLabel: '字典分类key', required: true})
        this.listOfControl.push({controlKey: 'label', controlLabel: '字典分类标签', required: true})
        this.listOfControl.push({controlKey: 'description', controlLabel: '字典分类描述', required: false})

        for (let control of this.listOfControl) {
            this.validateForm.addControl(control.controlKey, this.fb.control(''))

          if (control.required) {
            this.validateForm.controls[control.controlKey].addValidators(Validators.required)
          }
        }
        this.validateForm.addControl('builtIn', this.fb.control('false'))

        this.validateForm.controls['type'].addValidators(Validators.required)


        console.log('this.validateForm: ', this.validateForm);
    }


    /**
     * 初始化表单
     */
    override initForm() {

        // 如果有数据则自动填充
        if (this.datum) {
            console.log('存在数据: ', this.datum);
            // this.validateForm.controls['label'].setValue(this.datum.label)
            this.validateForm.setValue({
                'id': this.datum.id,
                'type': this.datum.type,
                'label': this.datum.label,
                'description': this.datum.description,
                'builtIn': this.datum.builtIn ? 'true' : 'false',
            })
        }

        // 触发父类的后续的逻辑
        super.initForm();
    }
}
