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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:datastore:{namespaceName}:user:{userId}:data:{dataObjectName}:history:{generation}";

export default class DataObjectHistory implements IModel {
    private dataObjectHistoryId: string|null = null;
    private dataObjectName: string|null = null;
    private generation: string|null = null;
    private contentLength: number|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '.*')
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
            .replace('{generation}', '.*')
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
            .replace('{generation}', '.*')
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
            .replace('{generation}', '.*')
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
            .replace('{generation}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGeneration(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '(.*)')
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
        if (this.getGeneration(grn) == null || this.getGeneration(grn) === '') {
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
        generation: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{dataObjectName}', dataObjectName ?? '')
            .replace('{generation}', generation ?? '');
    }
    public getDataObjectHistoryId(): string|null {
        return this.dataObjectHistoryId;
    }
    public setDataObjectHistoryId(dataObjectHistoryId: string|null) {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    }
    public withDataObjectHistoryId(dataObjectHistoryId: string|null): this {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    }
    public getDataObjectName(): string|null {
        return this.dataObjectName;
    }
    public setDataObjectName(dataObjectName: string|null) {
        this.dataObjectName = dataObjectName;
        return this;
    }
    public withDataObjectName(dataObjectName: string|null): this {
        this.dataObjectName = dataObjectName;
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
    public getContentLength(): number|null {
        return this.contentLength;
    }
    public setContentLength(contentLength: number|null) {
        this.contentLength = contentLength;
        return this;
    }
    public withContentLength(contentLength: number|null): this {
        this.contentLength = contentLength;
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

    public static fromDict(data: {[key: string]: any}): DataObjectHistory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataObjectHistory()
            .withDataObjectHistoryId(data["dataObjectHistoryId"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"])
            .withContentLength(data["contentLength"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "dataObjectHistoryId": this.getDataObjectHistoryId(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
            "contentLength": this.getContentLength(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
