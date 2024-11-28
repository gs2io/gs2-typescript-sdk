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

import * as Gs2SkillTree from '../../skillTree/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:skillTree:{namespaceName}:user:{userId}:status:{propertyId}";

export default class Status implements IModel {
    private statusId: string|null = null;
    private userId: string|null = null;
    private propertyId: string|null = null;
    private releasedNodeNames: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{propertyId}', '.*')
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
            .replace('{propertyId}', '.*')
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
            .replace('{propertyId}', '.*')
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
            .replace('{propertyId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getPropertyId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{propertyId}', '(.*)')
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
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        propertyId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{propertyId}', propertyId ?? '');
    }
    public getStatusId(): string|null {
        return this.statusId;
    }
    public setStatusId(statusId: string|null) {
        this.statusId = statusId;
        return this;
    }
    public withStatusId(statusId: string|null): this {
        this.statusId = statusId;
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
    public getPropertyId(): string|null {
        return this.propertyId;
    }
    public setPropertyId(propertyId: string|null) {
        this.propertyId = propertyId;
        return this;
    }
    public withPropertyId(propertyId: string|null): this {
        this.propertyId = propertyId;
        return this;
    }
    public getReleasedNodeNames(): string[]|null {
        return this.releasedNodeNames;
    }
    public setReleasedNodeNames(releasedNodeNames: string[]|null) {
        this.releasedNodeNames = releasedNodeNames;
        return this;
    }
    public withReleasedNodeNames(releasedNodeNames: string[]|null): this {
        this.releasedNodeNames = releasedNodeNames;
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

    public static fromDict(data: {[key: string]: any}): Status|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withReleasedNodeNames(data.releasedNodeNames ?
                data.releasedNodeNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statusId": this.getStatusId(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "releasedNodeNames": this.getReleasedNodeNames() ?
                this.getReleasedNodeNames()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
