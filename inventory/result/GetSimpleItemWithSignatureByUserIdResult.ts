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
import * as Gs2Inventory from '../model'

export default class GetSimpleItemWithSignatureByUserIdResult implements IResult {
    private item: Gs2Inventory.SimpleItem|null = null;
    private simpleItemModel: Gs2Inventory.SimpleItemModel|null = null;
    private body: string|null = null;
    private signature: string|null = null;

    public getItem(): Gs2Inventory.SimpleItem|null {
        return this.item;
    }

    public setItem(item: Gs2Inventory.SimpleItem|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Inventory.SimpleItem|null): this {
        this.item = item;
        return this;
    }

    public getSimpleItemModel(): Gs2Inventory.SimpleItemModel|null {
        return this.simpleItemModel;
    }

    public setSimpleItemModel(simpleItemModel: Gs2Inventory.SimpleItemModel|null) {
        this.simpleItemModel = simpleItemModel;
        return this;
    }

    public withSimpleItemModel(simpleItemModel: Gs2Inventory.SimpleItemModel|null): this {
        this.simpleItemModel = simpleItemModel;
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

    public static fromDict(data: {[key: string]: any}): GetSimpleItemWithSignatureByUserIdResult {
        return new GetSimpleItemWithSignatureByUserIdResult()
            .withItem(Gs2Inventory.SimpleItem.fromDict(data["item"]))
            .withSimpleItemModel(Gs2Inventory.SimpleItemModel.fromDict(data["simpleItemModel"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "simpleItemModel": this.getSimpleItemModel()?.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    }
}
