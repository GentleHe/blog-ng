import {ChangeDetectorRef, Component} from '@angular/core';
import {BaseStringControl, BaseFormComponent} from "../../../shared";
import {DictionaryTypeDTO} from "../../domain";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {DictionaryTypeService} from "../../service";
import {debounceTime, firstValueFrom} from "rxjs";


export class DictionaryTypeValidateForm extends FormGroup {


}



@Component({
    selector: 'app-dictionary-type-form',
    templateUrl: './dictionary-type-form.component.html',
    styleUrls: ['./dictionary-type-form.component.scss']
})
export class DictionaryTypeFormComponent extends BaseFormComponent<DictionaryTypeDTO> {

    constructor(fb: FormBuilder, cd: ChangeDetectorRef, private dictionaryTypeService: DictionaryTypeService, message: NzMessageService) {
        super(new DictionaryTypeDTO(), fb, cd, dictionaryTypeService, message);

        this.validateForm = this.fb.group({
            id: new FormControl({value: '', disabled: false}),
            // key: ['', [Validators.required]],
            // value: ['', [Validators.required]],
            // description: ['', [Validators.required]],
            // lockFlag: ['', [Validators.required]],
            // status: ['', [Validators.required]],
        })

        // this.controls.push(new BaseControl('id', '编号',  [Validators.required],[]))
        this.controls.push(new BaseStringControl('type', '字典分类key',  [Validators.required],[]))
        this.controls.push(new BaseStringControl('label', '字典分类标签',  [Validators.required],[]))
        this.controls.push(new BaseStringControl('description', '字典分类描述',[Validators.required],[]))
        // this.controls.push(new BaseControl('builtIn', '系统内置',[Validators.required],[]))

        for (let control of this.controls) {
            this.validateForm.addControl(control.controlKey, this.fb.control(''))

            // 添加同步验证器（改变立刻验证）
            if (control.validators) {
                for (let validator of control.validators) {
                    this.validateForm.controls[control.controlKey].addValidators(validator)
                }
            }
            // 异步验证器（提交时验证）
            if (control.asyncValidators) {
                for (let asyncValidator of control.asyncValidators) {
                    this.validateForm.controls[control.controlKey].addAsyncValidators(asyncValidator)
                }
            }
        }

        this.validateForm.addControl('builtIn', this.fb.control('false'))

        this.validateForm.controls['type'].valueChanges.pipe(debounceTime(500)).subscribe(()=>{
            console.log('执行一次操作');

            // this.columnValueExist(this.validateForm.controls['type'])


            var typeControl = this.validateForm.controls['type'];
            this.columnValueExist(typeControl).then(result=>{
                console.log('result: ', result);
                if (result && result.error) {
                    typeControl.invalid
                    typeControl.setErrors(result)
                }
            })


        })

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

        this.cd.detectChanges()
    }
}
