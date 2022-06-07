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

import * as Gs2Formation from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Formation.TransactionSetting|null = null;
    private updateMoldScript: Gs2Formation.ScriptSetting|null = null;
    private updateFormScript: Gs2Formation.ScriptSetting|null = null;
    private logSetting: Gs2Formation.LogSetting|null = null;

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

    public getTransactionSetting(): Gs2Formation.TransactionSetting|null {
        return this.transactionSetting;
    }

    public setTransactionSetting(transactionSetting: Gs2Formation.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }

    public withTransactionSetting(transactionSetting: Gs2Formation.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }

    public getUpdateMoldScript(): Gs2Formation.ScriptSetting|null {
        return this.updateMoldScript;
    }

    public setUpdateMoldScript(updateMoldScript: Gs2Formation.ScriptSetting|null) {
        this.updateMoldScript = updateMoldScript;
        return this;
    }

    public withUpdateMoldScript(updateMoldScript: Gs2Formation.ScriptSetting|null): this {
        this.updateMoldScript = updateMoldScript;
        return this;
    }

    public getUpdateFormScript(): Gs2Formation.ScriptSetting|null {
        return this.updateFormScript;
    }

    public setUpdateFormScript(updateFormScript: Gs2Formation.ScriptSetting|null) {
        this.updateFormScript = updateFormScript;
        return this;
    }

    public withUpdateFormScript(updateFormScript: Gs2Formation.ScriptSetting|null): this {
        this.updateFormScript = updateFormScript;
        return this;
    }

    public getLogSetting(): Gs2Formation.LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: Gs2Formation.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: Gs2Formation.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Formation.TransactionSetting.fromDict(data["transactionSetting"]))
            .withUpdateMoldScript(Gs2Formation.ScriptSetting.fromDict(data["updateMoldScript"]))
            .withUpdateFormScript(Gs2Formation.ScriptSetting.fromDict(data["updateFormScript"]))
            .withLogSetting(Gs2Formation.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "updateMoldScript": this.getUpdateMoldScript()?.toDict(),
            "updateFormScript": this.getUpdateFormScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}