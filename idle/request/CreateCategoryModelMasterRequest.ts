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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Idle from '../model'

export default class CreateCategoryModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private rewardIntervalMinutes: number|null = null;
    private defaultMaximumIdleMinutes: number|null = null;
    private rewardResetMode: string|null = null;
    private acquireActions: Gs2Idle.AcquireActionList[]|null = null;
    private idlePeriodScheduleId: string|null = null;
    private receivePeriodScheduleId: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
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
    public getRewardIntervalMinutes(): number|null {
        return this.rewardIntervalMinutes;
    }
    public setRewardIntervalMinutes(rewardIntervalMinutes: number|null) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    }
    public withRewardIntervalMinutes(rewardIntervalMinutes: number|null): this {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    }
    public getDefaultMaximumIdleMinutes(): number|null {
        return this.defaultMaximumIdleMinutes;
    }
    public setDefaultMaximumIdleMinutes(defaultMaximumIdleMinutes: number|null) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    }
    public withDefaultMaximumIdleMinutes(defaultMaximumIdleMinutes: number|null): this {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    }
    public getRewardResetMode(): string|null {
        return this.rewardResetMode;
    }
    public setRewardResetMode(rewardResetMode: string|null) {
        this.rewardResetMode = rewardResetMode;
        return this;
    }
    public withRewardResetMode(rewardResetMode: string|null): this {
        this.rewardResetMode = rewardResetMode;
        return this;
    }
    public getAcquireActions(): Gs2Idle.AcquireActionList[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: Gs2Idle.AcquireActionList[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: Gs2Idle.AcquireActionList[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }
    public getIdlePeriodScheduleId(): string|null {
        return this.idlePeriodScheduleId;
    }
    public setIdlePeriodScheduleId(idlePeriodScheduleId: string|null) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    }
    public withIdlePeriodScheduleId(idlePeriodScheduleId: string|null): this {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    }
    public getReceivePeriodScheduleId(): string|null {
        return this.receivePeriodScheduleId;
    }
    public setReceivePeriodScheduleId(receivePeriodScheduleId: string|null) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    }
    public withReceivePeriodScheduleId(receivePeriodScheduleId: string|null): this {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateCategoryModelMasterRequest {
        return new CreateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withRewardIntervalMinutes(data["rewardIntervalMinutes"])
            .withDefaultMaximumIdleMinutes(data["defaultMaximumIdleMinutes"])
            .withRewardResetMode(data["rewardResetMode"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Idle.AcquireActionList.fromDict(item);
                }
            ) : null)
            .withIdlePeriodScheduleId(data["idlePeriodScheduleId"])
            .withReceivePeriodScheduleId(data["receivePeriodScheduleId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "rewardIntervalMinutes": this.getRewardIntervalMinutes(),
            "defaultMaximumIdleMinutes": this.getDefaultMaximumIdleMinutes(),
            "rewardResetMode": this.getRewardResetMode(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Idle.AcquireActionList) => {
                    return item.toDict();
                }
            ) : null,
            "idlePeriodScheduleId": this.getIdlePeriodScheduleId(),
            "receivePeriodScheduleId": this.getReceivePeriodScheduleId(),
        };
    }
}