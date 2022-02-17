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
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';

export default class RateModelMaster implements IModel {
    private rateModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private consumeActions: ConsumeAction[]|null = null;
    private timingType: string|null = null;
    private lockTime: number|null = null;
    private enableSkip: boolean|null = null;
    private skipConsumeActions: ConsumeAction[]|null = null;
    private acquireActions: AcquireAction[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
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

    public getEnableSkip(): boolean|null {
        return this.enableSkip;
    }

    public setEnableSkip(enableSkip: boolean|null) {
        this.enableSkip = enableSkip;
        return this;
    }

    public withEnableSkip(enableSkip: boolean|null): this {
        this.enableSkip = enableSkip;
        return this;
    }

    public getSkipConsumeActions(): ConsumeAction[]|null {
        return this.skipConsumeActions;
    }

    public setSkipConsumeActions(skipConsumeActions: ConsumeAction[]|null) {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    }

    public withSkipConsumeActions(skipConsumeActions: ConsumeAction[]|null): this {
        this.skipConsumeActions = skipConsumeActions;
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

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RateModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModelMaster()
            .withRateModelId(data["rateModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : [])
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withEnableSkip(data["enableSkip"])
            .withSkipConsumeActions(data.skipConsumeActions ?
                data.skipConsumeActions.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : [])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rateModelId": this.getRateModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "enableSkip": this.getEnableSkip(),
            "skipConsumeActions": this.getSkipConsumeActions() ?
                this.getSkipConsumeActions()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
