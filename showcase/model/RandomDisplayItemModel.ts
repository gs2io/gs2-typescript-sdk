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

import IModel from '../../core/interface/IModel';
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';

export default class RandomDisplayItemModel implements IModel {
    private name: string|null = null;
    private metadata: string|null = null;
    private verifyActions: VerifyAction[]|null = null;
    private consumeActions: ConsumeAction[]|null = null;
    private acquireActions: AcquireAction[]|null = null;
    private stock: number|null = null;
    private weight: number|null = null;
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getVerifyActions(): VerifyAction[]|null {
        return this.verifyActions;
    }
    public setVerifyActions(verifyActions: VerifyAction[]|null) {
        this.verifyActions = verifyActions;
        return this;
    }
    public withVerifyActions(verifyActions: VerifyAction[]|null): this {
        this.verifyActions = verifyActions;
        return this;
    }
    public getConsumeActions(): ConsumeAction[]|null {
        return this.consumeActions;
    }
    public setConsumeActions(consumeActions: ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }
    public withConsumeActions(consumeActions: ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }
    public getAcquireActions(): AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }
    public getStock(): number|null {
        return this.stock;
    }
    public setStock(stock: number|null) {
        this.stock = stock;
        return this;
    }
    public withStock(stock: number|null): this {
        this.stock = stock;
        return this;
    }
    public getWeight(): number|null {
        return this.weight;
    }
    public setWeight(weight: number|null) {
        this.weight = weight;
        return this;
    }
    public withWeight(weight: number|null): this {
        this.weight = weight;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RandomDisplayItemModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomDisplayItemModel()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withVerifyActions(data.verifyActions ?
                data.verifyActions.map((item: {[key: string]: any}) => {
                    return VerifyAction.fromDict(item);
                }
            ) : [])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : [])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withStock(data["stock"])
            .withWeight(data["weight"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions()!.map((item: VerifyAction) => {
                    return item.toDict();
                }
            ) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "stock": this.getStock(),
            "weight": this.getWeight(),
        };
    }
}
