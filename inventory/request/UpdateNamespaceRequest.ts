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

import * as Gs2Inventory from '../model'

export default class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private acquireScript: Gs2Inventory.ScriptSetting|null = null;
    private overflowScript: Gs2Inventory.ScriptSetting|null = null;
    private consumeScript: Gs2Inventory.ScriptSetting|null = null;
    private simpleItemAcquireScript: Gs2Inventory.ScriptSetting|null = null;
    private simpleItemConsumeScript: Gs2Inventory.ScriptSetting|null = null;
    private bigItemAcquireScript: Gs2Inventory.ScriptSetting|null = null;
    private bigItemConsumeScript: Gs2Inventory.ScriptSetting|null = null;
    private logSetting: Gs2Inventory.LogSetting|null = null;

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
    public getAcquireScript(): Gs2Inventory.ScriptSetting|null {
        return this.acquireScript;
    }
    public setAcquireScript(acquireScript: Gs2Inventory.ScriptSetting|null) {
        this.acquireScript = acquireScript;
        return this;
    }
    public withAcquireScript(acquireScript: Gs2Inventory.ScriptSetting|null): this {
        this.acquireScript = acquireScript;
        return this;
    }
    public getOverflowScript(): Gs2Inventory.ScriptSetting|null {
        return this.overflowScript;
    }
    public setOverflowScript(overflowScript: Gs2Inventory.ScriptSetting|null) {
        this.overflowScript = overflowScript;
        return this;
    }
    public withOverflowScript(overflowScript: Gs2Inventory.ScriptSetting|null): this {
        this.overflowScript = overflowScript;
        return this;
    }
    public getConsumeScript(): Gs2Inventory.ScriptSetting|null {
        return this.consumeScript;
    }
    public setConsumeScript(consumeScript: Gs2Inventory.ScriptSetting|null) {
        this.consumeScript = consumeScript;
        return this;
    }
    public withConsumeScript(consumeScript: Gs2Inventory.ScriptSetting|null): this {
        this.consumeScript = consumeScript;
        return this;
    }
    public getSimpleItemAcquireScript(): Gs2Inventory.ScriptSetting|null {
        return this.simpleItemAcquireScript;
    }
    public setSimpleItemAcquireScript(simpleItemAcquireScript: Gs2Inventory.ScriptSetting|null) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    }
    public withSimpleItemAcquireScript(simpleItemAcquireScript: Gs2Inventory.ScriptSetting|null): this {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    }
    public getSimpleItemConsumeScript(): Gs2Inventory.ScriptSetting|null {
        return this.simpleItemConsumeScript;
    }
    public setSimpleItemConsumeScript(simpleItemConsumeScript: Gs2Inventory.ScriptSetting|null) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    }
    public withSimpleItemConsumeScript(simpleItemConsumeScript: Gs2Inventory.ScriptSetting|null): this {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    }
    public getBigItemAcquireScript(): Gs2Inventory.ScriptSetting|null {
        return this.bigItemAcquireScript;
    }
    public setBigItemAcquireScript(bigItemAcquireScript: Gs2Inventory.ScriptSetting|null) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    }
    public withBigItemAcquireScript(bigItemAcquireScript: Gs2Inventory.ScriptSetting|null): this {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    }
    public getBigItemConsumeScript(): Gs2Inventory.ScriptSetting|null {
        return this.bigItemConsumeScript;
    }
    public setBigItemConsumeScript(bigItemConsumeScript: Gs2Inventory.ScriptSetting|null) {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    }
    public withBigItemConsumeScript(bigItemConsumeScript: Gs2Inventory.ScriptSetting|null): this {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    }
    public getLogSetting(): Gs2Inventory.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Inventory.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Inventory.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["acquireScript"]))
            .withOverflowScript(Gs2Inventory.ScriptSetting.fromDict(data["overflowScript"]))
            .withConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["consumeScript"]))
            .withSimpleItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemAcquireScript"]))
            .withSimpleItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemConsumeScript"]))
            .withBigItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemAcquireScript"]))
            .withBigItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemConsumeScript"]))
            .withLogSetting(Gs2Inventory.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "acquireScript": this.getAcquireScript()?.toDict(),
            "overflowScript": this.getOverflowScript()?.toDict(),
            "consumeScript": this.getConsumeScript()?.toDict(),
            "simpleItemAcquireScript": this.getSimpleItemAcquireScript()?.toDict(),
            "simpleItemConsumeScript": this.getSimpleItemConsumeScript()?.toDict(),
            "bigItemAcquireScript": this.getBigItemAcquireScript()?.toDict(),
            "bigItemConsumeScript": this.getBigItemConsumeScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}