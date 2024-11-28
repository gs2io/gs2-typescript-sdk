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

import * as Gs2Mission from '../../mission/model'
import TargetCounterModel from './TargetCounterModel';
import VerifyAction from './VerifyAction';
import AcquireAction from './AcquireAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:missionTaskModelMaster:{missionTaskName}";

export default class MissionTaskModelMaster implements IModel {
    private missionTaskId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private verifyCompleteType: string|null = null;
    private targetCounter: Gs2Mission.TargetCounterModel|null = null;
    private verifyCompleteConsumeActions: Gs2Mission.VerifyAction[]|null = null;
    private completeAcquireActions: Gs2Mission.AcquireAction[]|null = null;
    private challengePeriodEventId: string|null = null;
    private premiseMissionTaskName: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;
    private counterName: string|null = null;
    private targetResetType: string|null = null;
    private targetValue: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*')
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
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*')
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
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMissionGroupName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '(.*)')
            .replace('{missionTaskName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMissionTaskName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '(.*)')
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
        if (this.getMissionGroupName(grn) == null || this.getMissionGroupName(grn) === '') {
            return false;
        }
        if (this.getMissionTaskName(grn) == null || this.getMissionTaskName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        missionGroupName: string|null,
        missionTaskName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{missionGroupName}', missionGroupName ?? '')
            .replace('{missionTaskName}', missionTaskName ?? '');
    }
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
    public getVerifyCompleteType(): string|null {
        return this.verifyCompleteType;
    }
    public setVerifyCompleteType(verifyCompleteType: string|null) {
        this.verifyCompleteType = verifyCompleteType;
        return this;
    }
    public withVerifyCompleteType(verifyCompleteType: string|null): this {
        this.verifyCompleteType = verifyCompleteType;
        return this;
    }
    public getTargetCounter(): Gs2Mission.TargetCounterModel|null {
        return this.targetCounter;
    }
    public setTargetCounter(targetCounter: Gs2Mission.TargetCounterModel|null) {
        this.targetCounter = targetCounter;
        return this;
    }
    public withTargetCounter(targetCounter: Gs2Mission.TargetCounterModel|null): this {
        this.targetCounter = targetCounter;
        return this;
    }
    public getVerifyCompleteConsumeActions(): Gs2Mission.VerifyAction[]|null {
        return this.verifyCompleteConsumeActions;
    }
    public setVerifyCompleteConsumeActions(verifyCompleteConsumeActions: Gs2Mission.VerifyAction[]|null) {
        this.verifyCompleteConsumeActions = verifyCompleteConsumeActions;
        return this;
    }
    public withVerifyCompleteConsumeActions(verifyCompleteConsumeActions: Gs2Mission.VerifyAction[]|null): this {
        this.verifyCompleteConsumeActions = verifyCompleteConsumeActions;
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }
    /** @deprecated */
    public getCounterName(): string|null {
        return this.counterName;
    }
    /** @deprecated */
    public setCounterName(counterName: string|null) {
        this.counterName = counterName;
        return this;
    }
    /** @deprecated */
    public withCounterName(counterName: string|null): this {
        this.counterName = counterName;
        return this;
    }
    /** @deprecated */
    public getTargetResetType(): string|null {
        return this.targetResetType;
    }
    /** @deprecated */
    public setTargetResetType(targetResetType: string|null) {
        this.targetResetType = targetResetType;
        return this;
    }
    /** @deprecated */
    public withTargetResetType(targetResetType: string|null): this {
        this.targetResetType = targetResetType;
        return this;
    }
    /** @deprecated */
    public getTargetValue(): number|null {
        return this.targetValue;
    }
    /** @deprecated */
    public setTargetValue(targetValue: number|null) {
        this.targetValue = targetValue;
        return this;
    }
    /** @deprecated */
    public withTargetValue(targetValue: number|null): this {
        this.targetValue = targetValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionTaskModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionTaskModelMaster()
            .withMissionTaskId(data["missionTaskId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withVerifyCompleteType(data["verifyCompleteType"])
            .withTargetCounter(Gs2Mission.TargetCounterModel.fromDict(data["targetCounter"]))
            .withVerifyCompleteConsumeActions(data.verifyCompleteConsumeActions ?
                data.verifyCompleteConsumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Mission.VerifyAction.fromDict(item);
                }
            ) : null)
            .withCompleteAcquireActions(data.completeAcquireActions ?
                data.completeAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Mission.AcquireAction.fromDict(item);
                }
            ) : null)
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"])
            .withCounterName(data["counterName"])
            .withTargetResetType(data["targetResetType"])
            .withTargetValue(data["targetValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "missionTaskId": this.getMissionTaskId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "verifyCompleteType": this.getVerifyCompleteType(),
            "targetCounter": this.getTargetCounter()?.toDict(),
            "verifyCompleteConsumeActions": this.getVerifyCompleteConsumeActions() ?
                this.getVerifyCompleteConsumeActions()!.map((item: Gs2Mission.VerifyAction) => {
                    return item.toDict();
                }
            ) : null,
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions()!.map((item: Gs2Mission.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
            "counterName": this.getCounterName(),
            "targetResetType": this.getTargetResetType(),
            "targetValue": this.getTargetValue(),
        };
    }
}
