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
import { AcquireAction } from './AcquireAction';

export class MissionTaskModel implements IModel {
    private missionTaskId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private counterName: string|null = null;
    private targetValue: number|null = null;
    private completeAcquireActions: AcquireAction[]|null = null;
    private challengePeriodEventId: string|null = null;
    private premiseMissionTaskName: string|null = null;

    public getMissionTaskId(): string|null {
        return this.missionTaskId;
    }

    public setMissionTaskId(missionTaskId: string|null) {
        this.missionTaskId = missionTaskId;
        return this;
    }

    public withMissionTaskId(missionTaskId: string|null): this {
        this.missionTaskId = missionTaskId;
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

    public getCompleteAcquireActions(): AcquireAction[]|null {
        return this.completeAcquireActions;
    }

    public setCompleteAcquireActions(completeAcquireActions: AcquireAction[]|null) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    }

    public withCompleteAcquireActions(completeAcquireActions: AcquireAction[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): MissionTaskModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionTaskModel()
            .withMissionTaskId(data["missionTaskId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withCounterName(data["counterName"])
            .withTargetValue(data["targetValue"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
                data.completeAcquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "missionTaskId": this.getMissionTaskId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "counterName": this.getCounterName(),
            "targetValue": this.getTargetValue(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
        };
    }
}
