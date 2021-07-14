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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Mission from '../model'

export class CreateMissionTaskModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private missionGroupName: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private counterName: string|null = null;
    private targetValue: number|null = null;
    private completeAcquireActions: Gs2Mission.AcquireAction[]|null = null;
    private challengePeriodEventId: string|null = null;
    private premiseMissionTaskName: string|null = null;

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

    public getMissionGroupName(): string|null {
        return this.missionGroupName;
    }

    public setMissionGroupName(missionGroupName: string|null) {
        this.missionGroupName = missionGroupName;
        return this;
    }

    public withMissionGroupName(missionGroupName: string|null): this {
        this.missionGroupName = missionGroupName;
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

    public getCounterName(): string|null {
        return this.counterName;
    }

    public setCounterName(counterName: string|null) {
        this.counterName = counterName;
        return this;
    }

    public withCounterName(counterName: string|null): this {
        this.counterName = counterName;
        return this;
    }

    public getTargetValue(): number|null {
        return this.targetValue;
    }

    public setTargetValue(targetValue: number|null) {
        this.targetValue = targetValue;
        return this;
    }

    public withTargetValue(targetValue: number|null): this {
        this.targetValue = targetValue;
        return this;
    }

    public getCompleteAcquireActions(): Gs2Mission.AcquireAction[]|null {
        return this.completeAcquireActions;
    }

    public setCompleteAcquireActions(completeAcquireActions: Gs2Mission.AcquireAction[]|null) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    }

    public withCompleteAcquireActions(completeAcquireActions: Gs2Mission.AcquireAction[]|null): this {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    }

    public getChallengePeriodEventId(): string|null {
        return this.challengePeriodEventId;
    }

    public setChallengePeriodEventId(challengePeriodEventId: string|null) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }

    public withChallengePeriodEventId(challengePeriodEventId: string|null): this {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }

    public getPremiseMissionTaskName(): string|null {
        return this.premiseMissionTaskName;
    }

    public setPremiseMissionTaskName(premiseMissionTaskName: string|null) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    }

    public withPremiseMissionTaskName(premiseMissionTaskName: string|null): this {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateMissionTaskModelMasterRequest {
        return new CreateMissionTaskModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withCounterName(data["counterName"])
            .withTargetValue(data["targetValue"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
                data.completeAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Mission.AcquireAction.fromDict(item);
                }
            ) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "counterName": this.getCounterName(),
            "targetValue": this.getTargetValue(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions()!.map((item: Gs2Mission.AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
        };
    }
}