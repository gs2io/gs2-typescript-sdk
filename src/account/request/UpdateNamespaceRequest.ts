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

import * as Gs2Account from '../model'

export class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private changePasswordIfTakeOver: boolean|null = null;
    private createAccountScript: Gs2Account.ScriptSetting|null = null;
    private authenticationScript: Gs2Account.ScriptSetting|null = null;
    private createTakeOverScript: Gs2Account.ScriptSetting|null = null;
    private doTakeOverScript: Gs2Account.ScriptSetting|null = null;
    private logSetting: Gs2Account.LogSetting|null = null;

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

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withCreateAccountScript(Gs2Account.ScriptSetting.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(Gs2Account.ScriptSetting.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["doTakeOverScript"]))
            .withLogSetting(Gs2Account.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "createAccountScript": this.getCreateAccountScript()?.toDict(),
            "authenticationScript": this.getAuthenticationScript()?.toDict(),
            "createTakeOverScript": this.getCreateTakeOverScript()?.toDict(),
            "doTakeOverScript": this.getDoTakeOverScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}