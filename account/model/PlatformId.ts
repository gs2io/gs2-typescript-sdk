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

import * as Gs2Account from '../../account/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:platformId:{type}:{userIdentifier}";

export default class PlatformId implements IModel {
    private platformId: string|null = null;
    private userId: string|null = null;
    private type: number|null = null;
    private userIdentifier: string|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '.*')
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
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '.*')
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
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getType(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '(.*)')
            .replace('{userIdentifier}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserIdentifier(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '(.*)')
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
        if (this.getType(grn) == null || this.getType(grn) === '') {
            return false;
        }
        if (this.getUserIdentifier(grn) == null || this.getUserIdentifier(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        type: string|null,
        userIdentifier: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{type}', type ?? '')
            .replace('{userIdentifier}', userIdentifier ?? '');
    }
    public getPlatformId(): string|null {
        return this.platformId;
    }
    public setPlatformId(platformId: string|null) {
        this.platformId = platformId;
        return this;
    }
    public withPlatformId(platformId: string|null): this {
        this.platformId = platformId;
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
    public getType(): number|null {
        return this.type;
    }
    public setType(type: number|null) {
        this.type = type;
        return this;
    }
    public withType(type: number|null): this {
        this.type = type;
        return this;
    }
    public getUserIdentifier(): string|null {
        return this.userIdentifier;
    }
    public setUserIdentifier(userIdentifier: string|null) {
        this.userIdentifier = userIdentifier;
        return this;
    }
    public withUserIdentifier(userIdentifier: string|null): this {
        this.userIdentifier = userIdentifier;
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

    public static fromDict(data: {[key: string]: any}): PlatformId|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformId()
            .withPlatformId(data["platformId"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "platformId": this.getPlatformId(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
