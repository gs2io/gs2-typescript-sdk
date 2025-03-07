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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Money2 from '../model'

export default class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private currencyUsagePriority: string|null = null;
    private description: string|null = null;
    private platformSetting: Gs2Money2.PlatformSetting|null = null;
    private depositBalanceScript: Gs2Money2.ScriptSetting|null = null;
    private withdrawBalanceScript: Gs2Money2.ScriptSetting|null = null;
    private subscribeScript: string|null = null;
    private renewScript: string|null = null;
    private unsubscribeScript: string|null = null;
    private takeOverScript: Gs2Money2.ScriptSetting|null = null;
    private changeSubscriptionStatusNotification: Gs2Money2.NotificationSetting|null = null;
    private logSetting: Gs2Money2.LogSetting|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
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

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withCurrencyUsagePriority(data["currencyUsagePriority"])
            .withDescription(data["description"])
            .withPlatformSetting(Gs2Money2.PlatformSetting.fromDict(data["platformSetting"]))
            .withDepositBalanceScript(Gs2Money2.ScriptSetting.fromDict(data["depositBalanceScript"]))
            .withWithdrawBalanceScript(Gs2Money2.ScriptSetting.fromDict(data["withdrawBalanceScript"]))
            .withSubscribeScript(data["subscribeScript"])
            .withRenewScript(data["renewScript"])
            .withUnsubscribeScript(data["unsubscribeScript"])
            .withTakeOverScript(Gs2Money2.ScriptSetting.fromDict(data["takeOverScript"]))
            .withChangeSubscriptionStatusNotification(Gs2Money2.NotificationSetting.fromDict(data["changeSubscriptionStatusNotification"]))
            .withLogSetting(Gs2Money2.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "currencyUsagePriority": this.getCurrencyUsagePriority(),
            "description": this.getDescription(),
            "platformSetting": this.getPlatformSetting()?.toDict(),
            "depositBalanceScript": this.getDepositBalanceScript()?.toDict(),
            "withdrawBalanceScript": this.getWithdrawBalanceScript()?.toDict(),
            "subscribeScript": this.getSubscribeScript(),
            "renewScript": this.getRenewScript(),
            "unsubscribeScript": this.getUnsubscribeScript(),
            "takeOverScript": this.getTakeOverScript()?.toDict(),
            "changeSubscriptionStatusNotification": this.getChangeSubscriptionStatusNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}