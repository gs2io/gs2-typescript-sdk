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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete";

export default class Complete implements IModel {
    private completeId: string|null = null;
    private userId: string|null = null;
    private missionGroupName: string|null = null;
    private completedMissionTaskNames: string[]|null = null;
    private receivedMissionTaskNames: string[]|null = null;
    private nextResetAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{missionGroupName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '(.*)')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getMissionGroupName(grn) == null || this.getMissionGroupName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        missionGroupName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{missionGroupName}', missionGroupName ?? '');
    }
    public getCompleteId(): string|null {
        return this.completeId;
    }
    public setCompleteId(completeId: string|null) {
        this.completeId = completeId;
        return this;
    }
    public withCompleteId(completeId: string|null): this {
        this.completeId = completeId;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
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
    public getCompletedMissionTaskNames(): string[]|null {
        return this.completedMissionTaskNames;
    }
    public setCompletedMissionTaskNames(completedMissionTaskNames: string[]|null) {
        this.completedMissionTaskNames = completedMissionTaskNames;
        return this;
    }
    public withCompletedMissionTaskNames(completedMissionTaskNames: string[]|null): this {
        this.completedMissionTaskNames = completedMissionTaskNames;
        return this;
    }
    public getReceivedMissionTaskNames(): string[]|null {
        return this.receivedMissionTaskNames;
    }
    public setReceivedMissionTaskNames(receivedMissionTaskNames: string[]|null) {
        this.receivedMissionTaskNames = receivedMissionTaskNames;
        return this;
    }
    public withReceivedMissionTaskNames(receivedMissionTaskNames: string[]|null): this {
        this.receivedMissionTaskNames = receivedMissionTaskNames;
        return this;
    }
    public getNextResetAt(): number|null {
        return this.nextResetAt;
    }
    public setNextResetAt(nextResetAt: number|null) {
        this.nextResetAt = nextResetAt;
        return this;
    }
    public withNextResetAt(nextResetAt: number|null): this {
        this.nextResetAt = nextResetAt;
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

    public static fromDict(data: {[key: string]: any}): Complete|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Complete()
            .withCompleteId(data["completeId"])
            .withUserId(data["userId"])
            .withMissionGroupName(data["missionGroupName"])
            .withCompletedMissionTaskNames(data.completedMissionTaskNames ?
                data.completedMissionTaskNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withReceivedMissionTaskNames(data.receivedMissionTaskNames ?
                data.receivedMissionTaskNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withNextResetAt(data["nextResetAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "completeId": this.getCompleteId(),
            "userId": this.getUserId(),
            "missionGroupName": this.getMissionGroupName(),
            "completedMissionTaskNames": this.getCompletedMissionTaskNames() ?
                this.getCompletedMissionTaskNames()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "receivedMissionTaskNames": this.getReceivedMissionTaskNames() ?
                this.getReceivedMissionTaskNames()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "nextResetAt": this.getNextResetAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
