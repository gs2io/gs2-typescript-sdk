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

import * as Gs2Freeze from '../../freeze/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:freeze:{stageName}";

export default class Stage implements IModel {
    private stageId: string|null = null;
    private name: string|null = null;
    private sourceStageName: string|null = null;
    private sortNumber: number|null = null;
    private status: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '.*')
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
            .replace('{stageName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStageName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '(.*)')
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
        if (this.getStageName(grn) == null || this.getStageName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        stageName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{stageName}', stageName ?? '');
    }
    public getStageId(): string|null {
        return this.stageId;
    }
    public setStageId(stageId: string|null) {
        this.stageId = stageId;
        return this;
    }
    public withStageId(stageId: string|null): this {
        this.stageId = stageId;
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
    public getSourceStageName(): string|null {
        return this.sourceStageName;
    }
    public setSourceStageName(sourceStageName: string|null) {
        this.sourceStageName = sourceStageName;
        return this;
    }
    public withSourceStageName(sourceStageName: string|null): this {
        this.sourceStageName = sourceStageName;
        return this;
    }
    public getSortNumber(): number|null {
        return this.sortNumber;
    }
    public setSortNumber(sortNumber: number|null) {
        this.sortNumber = sortNumber;
        return this;
    }
    public withSortNumber(sortNumber: number|null): this {
        this.sortNumber = sortNumber;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
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

    public static fromDict(data: {[key: string]: any}): Stage|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Stage()
            .withStageId(data["stageId"])
            .withName(data["name"])
            .withSourceStageName(data["sourceStageName"])
            .withSortNumber(data["sortNumber"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stageId": this.getStageId(),
            "name": this.getName(),
            "sourceStageName": this.getSourceStageName(),
            "sortNumber": this.getSortNumber(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
