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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:datastore:{namespaceName}:user:{userId}:data:{dataObjectName}";

export default class DataObject implements IModel {
    private dataObjectId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private scope: string|null = null;
    private allowUserIds: string[]|null = null;
    private status: string|null = null;
    private generation: string|null = null;
    private previousGeneration: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
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
            .replace('{dataObjectName}', '.*')
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
            .replace('{dataObjectName}', '.*')
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
            .replace('{dataObjectName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDataObjectName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '(.*)')
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
        if (this.getDataObjectName(grn) == null || this.getDataObjectName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        dataObjectName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{dataObjectName}', dataObjectName ?? '');
    }
    public getDataObjectId(): string|null {
        return this.dataObjectId;
    }
    public setDataObjectId(dataObjectId: string|null) {
        this.dataObjectId = dataObjectId;
        return this;
    }
    public withDataObjectId(dataObjectId: string|null): this {
        this.dataObjectId = dataObjectId;
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
    public getScope(): string|null {
        return this.scope;
    }
    public setScope(scope: string|null) {
        this.scope = scope;
        return this;
    }
    public withScope(scope: string|null): this {
        this.scope = scope;
        return this;
    }
    public getAllowUserIds(): string[]|null {
        return this.allowUserIds;
    }
    public setAllowUserIds(allowUserIds: string[]|null) {
        this.allowUserIds = allowUserIds;
        return this;
    }
    public withAllowUserIds(allowUserIds: string[]|null): this {
        this.allowUserIds = allowUserIds;
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
    public getGeneration(): string|null {
        return this.generation;
    }
    public setGeneration(generation: string|null) {
        this.generation = generation;
        return this;
    }
    public withGeneration(generation: string|null): this {
        this.generation = generation;
        return this;
    }
    public getPreviousGeneration(): string|null {
        return this.previousGeneration;
    }
    public setPreviousGeneration(previousGeneration: string|null) {
        this.previousGeneration = previousGeneration;
        return this;
    }
    public withPreviousGeneration(previousGeneration: string|null): this {
        this.previousGeneration = previousGeneration;
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

    public static fromDict(data: {[key: string]: any}): DataObject|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataObject()
            .withDataObjectId(data["dataObjectId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
                data.allowUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withStatus(data["status"])
            .withGeneration(data["generation"])
            .withPreviousGeneration(data["previousGeneration"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "dataObjectId": this.getDataObjectId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "scope": this.getScope(),
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "status": this.getStatus(),
            "generation": this.getGeneration(),
            "previousGeneration": this.getPreviousGeneration(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
