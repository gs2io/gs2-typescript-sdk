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
import BanStatus from './BanStatus';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:account:{userId}";

export default class Account implements IModel {
    private accountId: string|null = null;
    private userId: string|null = null;
    private password: string|null = null;
    private timeOffset: number|null = null;
    private banStatuses: BanStatus[]|null = null;
    private banned: boolean|null = null;
    private lastAuthenticatedAt: number|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '');
    }
    public getAccountId(): string|null {
        return this.accountId;
    }
    public setAccountId(accountId: string|null) {
        this.accountId = accountId;
        return this;
    }
    public withAccountId(accountId: string|null): this {
        this.accountId = accountId;
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
    public getPassword(): string|null {
        return this.password;
    }
    public setPassword(password: string|null) {
        this.password = password;
        return this;
    }
    public withPassword(password: string|null): this {
        this.password = password;
        return this;
    }
    public getTimeOffset(): number|null {
        return this.timeOffset;
    }
    public setTimeOffset(timeOffset: number|null) {
        this.timeOffset = timeOffset;
        return this;
    }
    public withTimeOffset(timeOffset: number|null): this {
        this.timeOffset = timeOffset;
        return this;
    }
    public getBanStatuses(): BanStatus[]|null {
        return this.banStatuses;
    }
    public setBanStatuses(banStatuses: BanStatus[]|null) {
        this.banStatuses = banStatuses;
        return this;
    }
    public withBanStatuses(banStatuses: BanStatus[]|null): this {
        this.banStatuses = banStatuses;
        return this;
    }
    public getBanned(): boolean|null {
        return this.banned;
    }
    public setBanned(banned: boolean|null) {
        this.banned = banned;
        return this;
    }
    public withBanned(banned: boolean|null): this {
        this.banned = banned;
        return this;
    }
    public getLastAuthenticatedAt(): number|null {
        return this.lastAuthenticatedAt;
    }
    public setLastAuthenticatedAt(lastAuthenticatedAt: number|null) {
        this.lastAuthenticatedAt = lastAuthenticatedAt;
        return this;
    }
    public withLastAuthenticatedAt(lastAuthenticatedAt: number|null): this {
        this.lastAuthenticatedAt = lastAuthenticatedAt;
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

    public static fromDict(data: {[key: string]: any}): Account|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Account()
            .withAccountId(data["accountId"])
            .withUserId(data["userId"])
            .withPassword(data["password"])
            .withTimeOffset(data["timeOffset"])
            .withBanStatuses(data.banStatuses ?
                data.banStatuses.map((item: {[key: string]: any}) => {
                    return BanStatus.fromDict(item);
                }
            ) : [])
            .withBanned(data["banned"])
            .withLastAuthenticatedAt(data["lastAuthenticatedAt"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accountId": this.getAccountId(),
            "userId": this.getUserId(),
            "password": this.getPassword(),
            "timeOffset": this.getTimeOffset(),
            "banStatuses": this.getBanStatuses() ?
                this.getBanStatuses()!.map((item: BanStatus) => {
                    return item.toDict();
                }
            ) : [],
            "banned": this.getBanned(),
            "lastAuthenticatedAt": this.getLastAuthenticatedAt(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
