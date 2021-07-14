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

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Formation from '../model'

export class GetFormWithSignatureByUserIdResult implements IResult {
    private item: Gs2Formation.Form|null = null;
    private body: string|null = null;
    private signature: string|null = null;
    private mold: Gs2Formation.Mold|null = null;
    private moldModel: Gs2Formation.MoldModel|null = null;
    private formModel: Gs2Formation.FormModel|null = null;

    public getItem(): Gs2Formation.Form|null {
        return this.item;
    }

    public setItem(item: Gs2Formation.Form|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Formation.Form|null): this {
        this.item = item;
        return this;
    }

    public getBody(): string|null {
        return this.body;
    }

    public setBody(body: string|null) {
        this.body = body;
        return this;
    }

    public withBody(body: string|null): this {
        this.body = body;
        return this;
    }

    public getSignature(): string|null {
        return this.signature;
    }

    public setSignature(signature: string|null) {
        this.signature = signature;
        return this;
    }

    public withSignature(signature: string|null): this {
        this.signature = signature;
        return this;
    }

    public getMold(): Gs2Formation.Mold|null {
        return this.mold;
    }

    public setMold(mold: Gs2Formation.Mold|null) {
        this.mold = mold;
        return this;
    }

    public withMold(mold: Gs2Formation.Mold|null): this {
        this.mold = mold;
        return this;
    }

    public getMoldModel(): Gs2Formation.MoldModel|null {
        return this.moldModel;
    }

    public setMoldModel(moldModel: Gs2Formation.MoldModel|null) {
        this.moldModel = moldModel;
        return this;
    }

    public withMoldModel(moldModel: Gs2Formation.MoldModel|null): this {
        this.moldModel = moldModel;
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

    public static fromDict(data: {[key: string]: any}): GetFormWithSignatureByUserIdResult {
        return new GetFormWithSignatureByUserIdResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "mold": this.getMold()?.toDict(),
            "moldModel": this.getMoldModel()?.toDict(),
            "formModel": this.getFormModel()?.toDict(),
        };
    }
}
