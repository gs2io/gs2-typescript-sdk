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

import * as Gs2StateMachine from '../../stateMachine/model'
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:stateMachine:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private supportSpeculativeExecution: string|null = null;
    private transactionSetting: Gs2StateMachine.TransactionSetting|null = null;
    private startScript: Gs2StateMachine.ScriptSetting|null = null;
    private passScript: Gs2StateMachine.ScriptSetting|null = null;
    private errorScript: Gs2StateMachine.ScriptSetting|null = null;
    private lowestStateMachineVersion: number|null = null;
    private logSetting: Gs2StateMachine.LogSetting|null = null;
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
            .withSupportSpeculativeExecution(data["supportSpeculativeExecution"])
            .withTransactionSetting(Gs2StateMachine.TransactionSetting.fromDict(data["transactionSetting"]))
            .withStartScript(Gs2StateMachine.ScriptSetting.fromDict(data["startScript"]))
            .withPassScript(Gs2StateMachine.ScriptSetting.fromDict(data["passScript"]))
            .withErrorScript(Gs2StateMachine.ScriptSetting.fromDict(data["errorScript"]))
            .withLowestStateMachineVersion(data["lowestStateMachineVersion"])
            .withLogSetting(Gs2StateMachine.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "supportSpeculativeExecution": this.getSupportSpeculativeExecution(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "startScript": this.getStartScript()?.toDict(),
            "passScript": this.getPassScript()?.toDict(),
            "errorScript": this.getErrorScript()?.toDict(),
            "lowestStateMachineVersion": this.getLowestStateMachineVersion(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
