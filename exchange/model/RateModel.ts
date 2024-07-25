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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:model:{rateName}";

export default class RateModel implements IModel {
    private rateModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private verifyActions: VerifyAction[]|null = null;
    private consumeActions: ConsumeAction[]|null = null;
    private timingType: string|null = null;
    private lockTime: number|null = null;
    private acquireActions: AcquireAction[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRateName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        rateName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{rateName}', rateName ?? '');
    }
    public getRateModelId(): string|null {
        return this.rateModelId;
    }
    public setRateModelId(rateModelId: string|null) {
        this.rateModelId = rateModelId;
        return this;
    }
    public withRateModelId(rateModelId: string|null): this {
        this.rateModelId = rateModelId;
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
    public getTimingType(): string|null {
        return this.timingType;
    }
    public setTimingType(timingType: string|null) {
        this.timingType = timingType;
        return this;
    }
    public withTimingType(timingType: string|null): this {
        this.timingType = timingType;
        return this;
    }
    public getLockTime(): number|null {
        return this.lockTime;
    }
    public setLockTime(lockTime: number|null) {
        this.lockTime = lockTime;
        return this;
    }
    public withLockTime(lockTime: number|null): this {
        this.lockTime = lockTime;
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

    public static fromDict(data: {[key: string]: any}): RateModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModel()
            .withRateModelId(data["rateModelId"])
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
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rateModelId": this.getRateModelId(),
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
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
