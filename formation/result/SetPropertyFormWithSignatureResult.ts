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

export default class SetPropertyFormWithSignatureResult implements IResult {
    private item: Gs2Formation.PropertyForm|null = null;
    private proeprtyFormModel: Gs2Formation.PropertyFormModel|null = null;

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

    public getProeprtyFormModel(): Gs2Formation.PropertyFormModel|null {
        return this.proeprtyFormModel;
    }

    public setProeprtyFormModel(proeprtyFormModel: Gs2Formation.PropertyFormModel|null) {
        this.proeprtyFormModel = proeprtyFormModel;
        return this;
    }

    public withProeprtyFormModel(proeprtyFormModel: Gs2Formation.PropertyFormModel|null): this {
        this.proeprtyFormModel = proeprtyFormModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SetPropertyFormWithSignatureResult {
        return new SetPropertyFormWithSignatureResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withProeprtyFormModel(Gs2Formation.PropertyFormModel.fromDict(data["proeprtyFormModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "proeprtyFormModel": this.getProeprtyFormModel()?.toDict(),
        };
    }
}
