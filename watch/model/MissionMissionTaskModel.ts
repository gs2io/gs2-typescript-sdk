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

import * as Gs2Watch from '../../watch/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:mission:namespace:{namespaceName}:missionGroupModel:{missionGroupName}:missionTaskModel:{missionTaskName}";

export default class MissionMissionTaskModel implements IModel {
    private missionTaskModelId: string|null = null;
    private missionTaskName: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDay(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
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
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
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
        year: string|null,
        month: string|null,
        day: string|null,
        namespaceName: string|null,
        missionGroupName: string|null,
        missionTaskName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{missionGroupName}', missionGroupName ?? '')
            .replace('{missionTaskName}', missionTaskName ?? '');
    }
    public getMissionTaskModelId(): string|null {
        return this.missionTaskModelId;
    }
    public setMissionTaskModelId(missionTaskModelId: string|null) {
        this.missionTaskModelId = missionTaskModelId;
        return this;
    }
    public withMissionTaskModelId(missionTaskModelId: string|null): this {
        this.missionTaskModelId = missionTaskModelId;
        return this;
    }
    public getMissionTaskName(): string|null {
        return this.missionTaskName;
    }
    public setMissionTaskName(missionTaskName: string|null) {
        this.missionTaskName = missionTaskName;
        return this;
    }
    public withMissionTaskName(missionTaskName: string|null): this {
        this.missionTaskName = missionTaskName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionMissionTaskModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionTaskModel()
            .withMissionTaskModelId(data["missionTaskModelId"])
            .withMissionTaskName(data["missionTaskName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "missionTaskModelId": this.getMissionTaskModelId(),
            "missionTaskName": this.getMissionTaskName(),
        };
    }
}
