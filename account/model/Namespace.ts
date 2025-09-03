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
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:account:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Account.TransactionSetting|null = null;
    private changePasswordIfTakeOver: boolean|null = null;
    private differentUserIdForLoginAndDataRetention: boolean|null = null;
    private createAccountScript: Gs2Account.ScriptSetting|null = null;
    private authenticationScript: Gs2Account.ScriptSetting|null = null;
    private createTakeOverScript: Gs2Account.ScriptSetting|null = null;
    private doTakeOverScript: Gs2Account.ScriptSetting|null = null;
    private banScript: Gs2Account.ScriptSetting|null = null;
    private unBanScript: Gs2Account.ScriptSetting|null = null;
    private logSetting: Gs2Account.LogSetting|null = null;
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
    public getTransactionSetting(): Gs2Account.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Account.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Account.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getChangePasswordIfTakeOver(): boolean|null {
        return this.changePasswordIfTakeOver;
    }
    public setChangePasswordIfTakeOver(changePasswordIfTakeOver: boolean|null) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    }
    public withChangePasswordIfTakeOver(changePasswordIfTakeOver: boolean|null): this {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    }
    public getDifferentUserIdForLoginAndDataRetention(): boolean|null {
        return this.differentUserIdForLoginAndDataRetention;
    }
    public setDifferentUserIdForLoginAndDataRetention(differentUserIdForLoginAndDataRetention: boolean|null) {
        this.differentUserIdForLoginAndDataRetention = differentUserIdForLoginAndDataRetention;
        return this;
    }
    public withDifferentUserIdForLoginAndDataRetention(differentUserIdForLoginAndDataRetention: boolean|null): this {
        this.differentUserIdForLoginAndDataRetention = differentUserIdForLoginAndDataRetention;
        return this;
    }
    public getCreateAccountScript(): Gs2Account.ScriptSetting|null {
        return this.createAccountScript;
    }
    public setCreateAccountScript(createAccountScript: Gs2Account.ScriptSetting|null) {
        this.createAccountScript = createAccountScript;
        return this;
    }
    public withCreateAccountScript(createAccountScript: Gs2Account.ScriptSetting|null): this {
        this.createAccountScript = createAccountScript;
        return this;
    }
    public getAuthenticationScript(): Gs2Account.ScriptSetting|null {
        return this.authenticationScript;
    }
    public setAuthenticationScript(authenticationScript: Gs2Account.ScriptSetting|null) {
        this.authenticationScript = authenticationScript;
        return this;
    }
    public withAuthenticationScript(authenticationScript: Gs2Account.ScriptSetting|null): this {
        this.authenticationScript = authenticationScript;
        return this;
    }
    public getCreateTakeOverScript(): Gs2Account.ScriptSetting|null {
        return this.createTakeOverScript;
    }
    public setCreateTakeOverScript(createTakeOverScript: Gs2Account.ScriptSetting|null) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    }
    public withCreateTakeOverScript(createTakeOverScript: Gs2Account.ScriptSetting|null): this {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    }
    public getDoTakeOverScript(): Gs2Account.ScriptSetting|null {
        return this.doTakeOverScript;
    }
    public setDoTakeOverScript(doTakeOverScript: Gs2Account.ScriptSetting|null) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    }
    public withDoTakeOverScript(doTakeOverScript: Gs2Account.ScriptSetting|null): this {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    }
    public getBanScript(): Gs2Account.ScriptSetting|null {
        return this.banScript;
    }
    public setBanScript(banScript: Gs2Account.ScriptSetting|null) {
        this.banScript = banScript;
        return this;
    }
    public withBanScript(banScript: Gs2Account.ScriptSetting|null): this {
        this.banScript = banScript;
        return this;
    }
    public getUnBanScript(): Gs2Account.ScriptSetting|null {
        return this.unBanScript;
    }
    public setUnBanScript(unBanScript: Gs2Account.ScriptSetting|null) {
        this.unBanScript = unBanScript;
        return this;
    }
    public withUnBanScript(unBanScript: Gs2Account.ScriptSetting|null): this {
        this.unBanScript = unBanScript;
        return this;
    }
    public getLogSetting(): Gs2Account.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Account.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Account.LogSetting|null): this {
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
            .withTransactionSetting(Gs2Account.TransactionSetting.fromDict(data["transactionSetting"]))
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withDifferentUserIdForLoginAndDataRetention(data["differentUserIdForLoginAndDataRetention"])
            .withCreateAccountScript(Gs2Account.ScriptSetting.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(Gs2Account.ScriptSetting.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["doTakeOverScript"]))
            .withBanScript(Gs2Account.ScriptSetting.fromDict(data["banScript"]))
            .withUnBanScript(Gs2Account.ScriptSetting.fromDict(data["unBanScript"]))
            .withLogSetting(Gs2Account.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "differentUserIdForLoginAndDataRetention": this.getDifferentUserIdForLoginAndDataRetention(),
            "createAccountScript": this.getCreateAccountScript()?.toDict(),
            "authenticationScript": this.getAuthenticationScript()?.toDict(),
            "createTakeOverScript": this.getCreateTakeOverScript()?.toDict(),
            "doTakeOverScript": this.getDoTakeOverScript()?.toDict(),
            "banScript": this.getBanScript()?.toDict(),
            "unBanScript": this.getUnBanScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
