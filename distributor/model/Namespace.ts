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

import * as Gs2Distributor from '../../distributor/model'
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:distributor:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private assumeUserId: string|null = null;
    private autoRunStampSheetNotification: Gs2Distributor.NotificationSetting|null = null;
    private autoRunTransactionNotification: Gs2Distributor.NotificationSetting|null = null;
    private logSetting: Gs2Distributor.LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '');
    }
    public getNamespaceId(): string|null {
        return this.namespaceId;
    }
    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }
    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
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
    public getAssumeUserId(): string|null {
        return this.assumeUserId;
    }
    public setAssumeUserId(assumeUserId: string|null) {
        this.assumeUserId = assumeUserId;
        return this;
    }
    public withAssumeUserId(assumeUserId: string|null): this {
        this.assumeUserId = assumeUserId;
        return this;
    }
    public getAutoRunStampSheetNotification(): Gs2Distributor.NotificationSetting|null {
        return this.autoRunStampSheetNotification;
    }
    public setAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting|null) {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    }
    public withAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting|null): this {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    }
    public getAutoRunTransactionNotification(): Gs2Distributor.NotificationSetting|null {
        return this.autoRunTransactionNotification;
    }
    public setAutoRunTransactionNotification(autoRunTransactionNotification: Gs2Distributor.NotificationSetting|null) {
        this.autoRunTransactionNotification = autoRunTransactionNotification;
        return this;
    }
    public withAutoRunTransactionNotification(autoRunTransactionNotification: Gs2Distributor.NotificationSetting|null): this {
        this.autoRunTransactionNotification = autoRunTransactionNotification;
        return this;
    }
    public getLogSetting(): Gs2Distributor.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Distributor.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Distributor.LogSetting|null): this {
        this.logSetting = logSetting;
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withAssumeUserId(data["assumeUserId"])
            .withAutoRunStampSheetNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunStampSheetNotification"]))
            .withAutoRunTransactionNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunTransactionNotification"]))
            .withLogSetting(Gs2Distributor.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "assumeUserId": this.getAssumeUserId(),
            "autoRunStampSheetNotification": this.getAutoRunStampSheetNotification()?.toDict(),
            "autoRunTransactionNotification": this.getAutoRunTransactionNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
