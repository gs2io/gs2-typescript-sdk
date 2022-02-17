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
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private priority: string|null = null;
    private shareFree: boolean|null = null;
    private currency: string|null = null;
    private appleKey: string|null = null;
    private googleKey: string|null = null;
    private enableFakeReceipt: boolean|null = null;
    private createWalletScript: ScriptSetting|null = null;
    private depositScript: ScriptSetting|null = null;
    private withdrawScript: ScriptSetting|null = null;
    private balance: number|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getCreateWalletScript(): ScriptSetting|null {
        return this.createWalletScript;
    }

    public setCreateWalletScript(createWalletScript: ScriptSetting|null) {
        this.createWalletScript = createWalletScript;
        return this;
    }

    public withCreateWalletScript(createWalletScript: ScriptSetting|null): this {
        this.createWalletScript = createWalletScript;
        return this;
    }

    public getDepositScript(): ScriptSetting|null {
        return this.depositScript;
    }

    public setDepositScript(depositScript: ScriptSetting|null) {
        this.depositScript = depositScript;
        return this;
    }

    public withDepositScript(depositScript: ScriptSetting|null): this {
        this.depositScript = depositScript;
        return this;
    }

    public getWithdrawScript(): ScriptSetting|null {
        return this.withdrawScript;
    }

    public setWithdrawScript(withdrawScript: ScriptSetting|null) {
        this.withdrawScript = withdrawScript;
        return this;
    }

    public withWithdrawScript(withdrawScript: ScriptSetting|null): this {
        this.withdrawScript = withdrawScript;
        return this;
    }

    public getBalance(): number|null {
        return this.balance;
    }

    public setBalance(balance: number|null) {
        this.balance = balance;
        return this;
    }

    public withBalance(balance: number|null): this {
        this.balance = balance;
        return this;
    }

    public getLogSetting(): LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: LogSetting|null): this {
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPriority(data["priority"])
            .withShareFree(data["shareFree"])
            .withCurrency(data["currency"])
            .withAppleKey(data["appleKey"])
            .withGoogleKey(data["googleKey"])
            .withEnableFakeReceipt(data["enableFakeReceipt"])
            .withCreateWalletScript(ScriptSetting.fromDict(data["createWalletScript"]))
            .withDepositScript(ScriptSetting.fromDict(data["depositScript"]))
            .withWithdrawScript(ScriptSetting.fromDict(data["withdrawScript"]))
            .withBalance(data["balance"])
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
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
            "balance": this.getBalance(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
