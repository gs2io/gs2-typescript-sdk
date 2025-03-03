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

import * as Gs2Money2 from '../../money2/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:subscriptionTransaction:{contentName}:{transactionId}";

export default class SubscribeTransaction implements IModel {
    private subscribeTransactionId: string|null = null;
    private contentName: string|null = null;
    private transactionId: string|null = null;
    private store: string|null = null;
    private userId: string|null = null;
    private statusDetail: string|null = null;
    private expiresAt: number|null = null;
    private lastAllocatedAt: number|null = null;
    private lastTakeOverAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '.*')
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
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '.*')
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
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getContentName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '(.*)')
            .replace('{transactionId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getTransactionId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*')
            .replace('{transactionId}', '(.*)')
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
        if (this.getContentName(grn) == null || this.getContentName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        contentName: string|null,
        transactionId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{contentName}', contentName ?? '')
            .replace('{transactionId}', transactionId ?? '');
    }
    public getSubscribeTransactionId(): string|null {
        return this.subscribeTransactionId;
    }
    public setSubscribeTransactionId(subscribeTransactionId: string|null) {
        this.subscribeTransactionId = subscribeTransactionId;
        return this;
    }
    public withSubscribeTransactionId(subscribeTransactionId: string|null): this {
        this.subscribeTransactionId = subscribeTransactionId;
        return this;
    }
    public getContentName(): string|null {
        return this.contentName;
    }
    public setContentName(contentName: string|null) {
        this.contentName = contentName;
        return this;
    }
    public withContentName(contentName: string|null): this {
        this.contentName = contentName;
        return this;
    }
    public getTransactionId(): string|null {
        return this.transactionId;
    }
    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }
    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
        return this;
    }
    public getStore(): string|null {
        return this.store;
    }
    public setStore(store: string|null) {
        this.store = store;
        return this;
    }
    public withStore(store: string|null): this {
        this.store = store;
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
    public getStatusDetail(): string|null {
        return this.statusDetail;
    }
    public setStatusDetail(statusDetail: string|null) {
        this.statusDetail = statusDetail;
        return this;
    }
    public withStatusDetail(statusDetail: string|null): this {
        this.statusDetail = statusDetail;
        return this;
    }
    public getExpiresAt(): number|null {
        return this.expiresAt;
    }
    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }
    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
        return this;
    }
    public getLastAllocatedAt(): number|null {
        return this.lastAllocatedAt;
    }
    public setLastAllocatedAt(lastAllocatedAt: number|null) {
        this.lastAllocatedAt = lastAllocatedAt;
        return this;
    }
    public withLastAllocatedAt(lastAllocatedAt: number|null): this {
        this.lastAllocatedAt = lastAllocatedAt;
        return this;
    }
    public getLastTakeOverAt(): number|null {
        return this.lastTakeOverAt;
    }
    public setLastTakeOverAt(lastTakeOverAt: number|null) {
        this.lastTakeOverAt = lastTakeOverAt;
        return this;
    }
    public withLastTakeOverAt(lastTakeOverAt: number|null): this {
        this.lastTakeOverAt = lastTakeOverAt;
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

    public static fromDict(data: {[key: string]: any}): SubscribeTransaction|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeTransaction()
            .withSubscribeTransactionId(data["subscribeTransactionId"])
            .withContentName(data["contentName"])
            .withTransactionId(data["transactionId"])
            .withStore(data["store"])
            .withUserId(data["userId"])
            .withStatusDetail(data["statusDetail"])
            .withExpiresAt(data["expiresAt"])
            .withLastAllocatedAt(data["lastAllocatedAt"])
            .withLastTakeOverAt(data["lastTakeOverAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeTransactionId": this.getSubscribeTransactionId(),
            "contentName": this.getContentName(),
            "transactionId": this.getTransactionId(),
            "store": this.getStore(),
            "userId": this.getUserId(),
            "statusDetail": this.getStatusDetail(),
            "expiresAt": this.getExpiresAt(),
            "lastAllocatedAt": this.getLastAllocatedAt(),
            "lastTakeOverAt": this.getLastTakeOverAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
