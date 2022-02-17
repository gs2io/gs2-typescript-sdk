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

import * as Gs2Money from '../model'

export class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private priority: string|null = null;
    private shareFree: boolean|null = null;
    private currency: string|null = null;
    private appleKey: string|null = null;
    private googleKey: string|null = null;
    private enableFakeReceipt: boolean|null = null;
    private createWalletScript: Gs2Money.ScriptSetting|null = null;
    private depositScript: Gs2Money.ScriptSetting|null = null;
    private withdrawScript: Gs2Money.ScriptSetting|null = null;
    private logSetting: Gs2Money.LogSetting|null = null;

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

    public getPriority(): string|null {
        return this.priority;
    }

    public setPriority(priority: string|null) {
        this.priority = priority;
        return this;
    }

    public withPriority(priority: string|null): this {
        this.priority = priority;
        return this;
    }

    public getShareFree(): boolean|null {
        return this.shareFree;
    }

    public setShareFree(shareFree: boolean|null) {
        this.shareFree = shareFree;
        return this;
    }

    public withShareFree(shareFree: boolean|null): this {
        this.shareFree = shareFree;
        return this;
    }

    public getCurrency(): string|null {
        return this.currency;
    }

    public setCurrency(currency: string|null) {
        this.currency = currency;
        return this;
    }

    public withCurrency(currency: string|null): this {
        this.currency = currency;
        return this;
    }

    public getAppleKey(): string|null {
        return this.appleKey;
    }

    public setAppleKey(appleKey: string|null) {
        this.appleKey = appleKey;
        return this;
    }

    public withAppleKey(appleKey: string|null): this {
        this.appleKey = appleKey;
        return this;
    }

    public getGoogleKey(): string|null {
        return this.googleKey;
    }

    public setGoogleKey(googleKey: string|null) {
        this.googleKey = googleKey;
        return this;
    }

    public withGoogleKey(googleKey: string|null): this {
        this.googleKey = googleKey;
        return this;
    }

    public getEnableFakeReceipt(): boolean|null {
        return this.enableFakeReceipt;
    }

    public setEnableFakeReceipt(enableFakeReceipt: boolean|null) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    }

    public withEnableFakeReceipt(enableFakeReceipt: boolean|null): this {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    }

    public getCreateWalletScript(): Gs2Money.ScriptSetting|null {
        return this.createWalletScript;
    }

    public setCreateWalletScript(createWalletScript: Gs2Money.ScriptSetting|null) {
        this.createWalletScript = createWalletScript;
        return this;
    }

    public withCreateWalletScript(createWalletScript: Gs2Money.ScriptSetting|null): this {
        this.createWalletScript = createWalletScript;
        return this;
    }

    public getDepositScript(): Gs2Money.ScriptSetting|null {
        return this.depositScript;
    }

    public setDepositScript(depositScript: Gs2Money.ScriptSetting|null) {
        this.depositScript = depositScript;
        return this;
    }

    public withDepositScript(depositScript: Gs2Money.ScriptSetting|null): this {
        this.depositScript = depositScript;
        return this;
    }

    public getWithdrawScript(): Gs2Money.ScriptSetting|null {
        return this.withdrawScript;
    }

    public setWithdrawScript(withdrawScript: Gs2Money.ScriptSetting|null) {
        this.withdrawScript = withdrawScript;
        return this;
    }

    public withWithdrawScript(withdrawScript: Gs2Money.ScriptSetting|null): this {
        this.withdrawScript = withdrawScript;
        return this;
    }

    public getLogSetting(): Gs2Money.LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: Gs2Money.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: Gs2Money.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withPriority(data["priority"])
            .withShareFree(data["shareFree"])
            .withCurrency(data["currency"])
            .withAppleKey(data["appleKey"])
            .withGoogleKey(data["googleKey"])
            .withEnableFakeReceipt(data["enableFakeReceipt"])
            .withCreateWalletScript(Gs2Money.ScriptSetting.fromDict(data["createWalletScript"]))
            .withDepositScript(Gs2Money.ScriptSetting.fromDict(data["depositScript"]))
            .withWithdrawScript(Gs2Money.ScriptSetting.fromDict(data["withdrawScript"]))
            .withLogSetting(Gs2Money.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "priority": this.getPriority(),
            "shareFree": this.getShareFree(),
            "currency": this.getCurrency(),
            "appleKey": this.getAppleKey(),
            "googleKey": this.getGoogleKey(),
            "enableFakeReceipt": this.getEnableFakeReceipt(),
            "createWalletScript": this.getCreateWalletScript()?.toDict(),
            "depositScript": this.getDepositScript()?.toDict(),
            "withdrawScript": this.getWithdrawScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}