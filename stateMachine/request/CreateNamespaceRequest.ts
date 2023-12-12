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

import * as Gs2StateMachine from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private supportSpeculativeExecution: string|null = null;
    private transactionSetting: Gs2StateMachine.TransactionSetting|null = null;
    private startScript: Gs2StateMachine.ScriptSetting|null = null;
    private passScript: Gs2StateMachine.ScriptSetting|null = null;
    private errorScript: Gs2StateMachine.ScriptSetting|null = null;
    private lowestStateMachineVersion: number|null = null;
    private logSetting: Gs2StateMachine.LogSetting|null = null;

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
    public getSupportSpeculativeExecution(): string|null {
        return this.supportSpeculativeExecution;
    }
    public setSupportSpeculativeExecution(supportSpeculativeExecution: string|null) {
        this.supportSpeculativeExecution = supportSpeculativeExecution;
        return this;
    }
    public withSupportSpeculativeExecution(supportSpeculativeExecution: string|null): this {
        this.supportSpeculativeExecution = supportSpeculativeExecution;
        return this;
    }
    public getTransactionSetting(): Gs2StateMachine.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2StateMachine.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2StateMachine.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getStartScript(): Gs2StateMachine.ScriptSetting|null {
        return this.startScript;
    }
    public setStartScript(startScript: Gs2StateMachine.ScriptSetting|null) {
        this.startScript = startScript;
        return this;
    }
    public withStartScript(startScript: Gs2StateMachine.ScriptSetting|null): this {
        this.startScript = startScript;
        return this;
    }
    public getPassScript(): Gs2StateMachine.ScriptSetting|null {
        return this.passScript;
    }
    public setPassScript(passScript: Gs2StateMachine.ScriptSetting|null) {
        this.passScript = passScript;
        return this;
    }
    public withPassScript(passScript: Gs2StateMachine.ScriptSetting|null): this {
        this.passScript = passScript;
        return this;
    }
    public getErrorScript(): Gs2StateMachine.ScriptSetting|null {
        return this.errorScript;
    }
    public setErrorScript(errorScript: Gs2StateMachine.ScriptSetting|null) {
        this.errorScript = errorScript;
        return this;
    }
    public withErrorScript(errorScript: Gs2StateMachine.ScriptSetting|null): this {
        this.errorScript = errorScript;
        return this;
    }
    public getLowestStateMachineVersion(): number|null {
        return this.lowestStateMachineVersion;
    }
    public setLowestStateMachineVersion(lowestStateMachineVersion: number|null) {
        this.lowestStateMachineVersion = lowestStateMachineVersion;
        return this;
    }
    public withLowestStateMachineVersion(lowestStateMachineVersion: number|null): this {
        this.lowestStateMachineVersion = lowestStateMachineVersion;
        return this;
    }
    public getLogSetting(): Gs2StateMachine.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2StateMachine.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2StateMachine.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withSupportSpeculativeExecution(data["supportSpeculativeExecution"])
            .withTransactionSetting(Gs2StateMachine.TransactionSetting.fromDict(data["transactionSetting"]))
            .withStartScript(Gs2StateMachine.ScriptSetting.fromDict(data["startScript"]))
            .withPassScript(Gs2StateMachine.ScriptSetting.fromDict(data["passScript"]))
            .withErrorScript(Gs2StateMachine.ScriptSetting.fromDict(data["errorScript"]))
            .withLowestStateMachineVersion(data["lowestStateMachineVersion"])
            .withLogSetting(Gs2StateMachine.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "supportSpeculativeExecution": this.getSupportSpeculativeExecution(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "startScript": this.getStartScript()?.toDict(),
            "passScript": this.getPassScript()?.toDict(),
            "errorScript": this.getErrorScript()?.toDict(),
            "lowestStateMachineVersion": this.getLowestStateMachineVersion(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}