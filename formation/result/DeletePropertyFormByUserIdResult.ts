/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IResult from '../../core/interface/IResult';

import * as Gs2Formation from '../model'

export default class DeletePropertyFormByUserIdResult implements IResult {
    private item: Gs2Formation.PropertyForm|null = null;
    private formModel: Gs2Formation.FormModel|null = null;

    public getItem(): Gs2Formation.PropertyForm|null {
        return this.item;
    }

    public setItem(item: Gs2Formation.PropertyForm|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Formation.PropertyForm|null): this {
        this.item = item;
        return this;
    }

    public getFormModel(): Gs2Formation.FormModel|null {
        return this.formModel;
    }

    public setFormModel(formModel: Gs2Formation.FormModel|null) {
        this.formModel = formModel;
        return this;
    }

    public withFormModel(formModel: Gs2Formation.FormModel|null): this {
        this.formModel = formModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DeletePropertyFormByUserIdResult {
        return new DeletePropertyFormByUserIdResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "formModel": this.getFormModel()?.toDict(),
        };
    }
}
