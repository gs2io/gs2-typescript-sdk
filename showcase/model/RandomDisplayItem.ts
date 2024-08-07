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

export default class RandomDisplayItem implements IModel {
    private showcaseName: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private verifyActions: VerifyAction[]|null = null;
    private consumeActions: ConsumeAction[]|null = null;
    private acquireActions: AcquireAction[]|null = null;
    private currentPurchaseCount: number|null = null;
    private maximumPurchaseCount: number|null = null;
    public getShowcaseName(): string|null {
        return this.showcaseName;
    }
    public setShowcaseName(showcaseName: string|null) {
        this.showcaseName = showcaseName;
        return this;
    }
    public withShowcaseName(showcaseName: string|null): this {
        this.showcaseName = showcaseName;
        return this;
    }
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
    public getCurrentPurchaseCount(): number|null {
        return this.currentPurchaseCount;
    }
    public setCurrentPurchaseCount(currentPurchaseCount: number|null) {
        this.currentPurchaseCount = currentPurchaseCount;
        return this;
    }
    public withCurrentPurchaseCount(currentPurchaseCount: number|null): this {
        this.currentPurchaseCount = currentPurchaseCount;
        return this;
    }
    public getMaximumPurchaseCount(): number|null {
        return this.maximumPurchaseCount;
    }
    public setMaximumPurchaseCount(maximumPurchaseCount: number|null) {
        this.maximumPurchaseCount = maximumPurchaseCount;
        return this;
    }
    public withMaximumPurchaseCount(maximumPurchaseCount: number|null): this {
        this.maximumPurchaseCount = maximumPurchaseCount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RandomDisplayItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomDisplayItem()
            .withShowcaseName(data["showcaseName"])
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
            .withCurrentPurchaseCount(data["currentPurchaseCount"])
            .withMaximumPurchaseCount(data["maximumPurchaseCount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "showcaseName": this.getShowcaseName(),
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
            "currentPurchaseCount": this.getCurrentPurchaseCount(),
            "maximumPurchaseCount": this.getMaximumPurchaseCount(),
        };
    }
}
