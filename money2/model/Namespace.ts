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
import AppleAppStoreSetting from './AppleAppStoreSetting';
import GooglePlaySetting from './GooglePlaySetting';
import FakeSetting from './FakeSetting';
import PlatformSetting from './PlatformSetting';
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private currencyUsagePriority: string|null = null;
    private sharedFreeCurrency: boolean|null = null;
    private platformSetting: Gs2Money2.PlatformSetting|null = null;
    private depositBalanceScript: Gs2Money2.ScriptSetting|null = null;
    private withdrawBalanceScript: Gs2Money2.ScriptSetting|null = null;
    private subscribeScript: string|null = null;
    private renewScript: string|null = null;
    private unsubscribeScript: string|null = null;
    private takeOverScript: Gs2Money2.ScriptSetting|null = null;
    private changeSubscriptionStatusNotification: Gs2Money2.NotificationSetting|null = null;
    private logSetting: Gs2Money2.LogSetting|null = null;
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
    public getCurrencyUsagePriority(): string|null {
        return this.currencyUsagePriority;
    }
    public setCurrencyUsagePriority(currencyUsagePriority: string|null) {
        this.currencyUsagePriority = currencyUsagePriority;
        return this;
    }
    public withCurrencyUsagePriority(currencyUsagePriority: string|null): this {
        this.currencyUsagePriority = currencyUsagePriority;
        return this;
    }
    public getSharedFreeCurrency(): boolean|null {
        return this.sharedFreeCurrency;
    }
    public setSharedFreeCurrency(sharedFreeCurrency: boolean|null) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    }
    public withSharedFreeCurrency(sharedFreeCurrency: boolean|null): this {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    }
    public getPlatformSetting(): Gs2Money2.PlatformSetting|null {
        return this.platformSetting;
    }
    public setPlatformSetting(platformSetting: Gs2Money2.PlatformSetting|null) {
        this.platformSetting = platformSetting;
        return this;
    }
    public withPlatformSetting(platformSetting: Gs2Money2.PlatformSetting|null): this {
        this.platformSetting = platformSetting;
        return this;
    }
    public getDepositBalanceScript(): Gs2Money2.ScriptSetting|null {
        return this.depositBalanceScript;
    }
    public setDepositBalanceScript(depositBalanceScript: Gs2Money2.ScriptSetting|null) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    }
    public withDepositBalanceScript(depositBalanceScript: Gs2Money2.ScriptSetting|null): this {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    }
    public getWithdrawBalanceScript(): Gs2Money2.ScriptSetting|null {
        return this.withdrawBalanceScript;
    }
    public setWithdrawBalanceScript(withdrawBalanceScript: Gs2Money2.ScriptSetting|null) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    }
    public withWithdrawBalanceScript(withdrawBalanceScript: Gs2Money2.ScriptSetting|null): this {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    }
    public getSubscribeScript(): string|null {
        return this.subscribeScript;
    }
    public setSubscribeScript(subscribeScript: string|null) {
        this.subscribeScript = subscribeScript;
        return this;
    }
    public withSubscribeScript(subscribeScript: string|null): this {
        this.subscribeScript = subscribeScript;
        return this;
    }
    public getRenewScript(): string|null {
        return this.renewScript;
    }
    public setRenewScript(renewScript: string|null) {
        this.renewScript = renewScript;
        return this;
    }
    public withRenewScript(renewScript: string|null): this {
        this.renewScript = renewScript;
        return this;
    }
    public getUnsubscribeScript(): string|null {
        return this.unsubscribeScript;
    }
    public setUnsubscribeScript(unsubscribeScript: string|null) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    }
    public withUnsubscribeScript(unsubscribeScript: string|null): this {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    }
    public getTakeOverScript(): Gs2Money2.ScriptSetting|null {
        return this.takeOverScript;
    }
    public setTakeOverScript(takeOverScript: Gs2Money2.ScriptSetting|null) {
        this.takeOverScript = takeOverScript;
        return this;
    }
    public withTakeOverScript(takeOverScript: Gs2Money2.ScriptSetting|null): this {
        this.takeOverScript = takeOverScript;
        return this;
    }
    public getChangeSubscriptionStatusNotification(): Gs2Money2.NotificationSetting|null {
        return this.changeSubscriptionStatusNotification;
    }
    public setChangeSubscriptionStatusNotification(changeSubscriptionStatusNotification: Gs2Money2.NotificationSetting|null) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
        return this;
    }
    public withChangeSubscriptionStatusNotification(changeSubscriptionStatusNotification: Gs2Money2.NotificationSetting|null): this {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
        return this;
    }
    public getLogSetting(): Gs2Money2.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Money2.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Money2.LogSetting|null): this {
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
            .withCurrencyUsagePriority(data["currencyUsagePriority"])
            .withSharedFreeCurrency(data["sharedFreeCurrency"])
            .withPlatformSetting(Gs2Money2.PlatformSetting.fromDict(data["platformSetting"]))
            .withDepositBalanceScript(Gs2Money2.ScriptSetting.fromDict(data["depositBalanceScript"]))
            .withWithdrawBalanceScript(Gs2Money2.ScriptSetting.fromDict(data["withdrawBalanceScript"]))
            .withSubscribeScript(data["subscribeScript"])
            .withRenewScript(data["renewScript"])
            .withUnsubscribeScript(data["unsubscribeScript"])
            .withTakeOverScript(Gs2Money2.ScriptSetting.fromDict(data["takeOverScript"]))
            .withChangeSubscriptionStatusNotification(Gs2Money2.NotificationSetting.fromDict(data["changeSubscriptionStatusNotification"]))
            .withLogSetting(Gs2Money2.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "currencyUsagePriority": this.getCurrencyUsagePriority(),
            "sharedFreeCurrency": this.getSharedFreeCurrency(),
            "platformSetting": this.getPlatformSetting()?.toDict(),
            "depositBalanceScript": this.getDepositBalanceScript()?.toDict(),
            "withdrawBalanceScript": this.getWithdrawBalanceScript()?.toDict(),
            "subscribeScript": this.getSubscribeScript(),
            "renewScript": this.getRenewScript(),
            "unsubscribeScript": this.getUnsubscribeScript(),
            "takeOverScript": this.getTakeOverScript()?.toDict(),
            "changeSubscriptionStatusNotification": this.getChangeSubscriptionStatusNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
