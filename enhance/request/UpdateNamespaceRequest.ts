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

import * as Gs2Enhance from '../model'

export default class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Enhance.TransactionSetting|null = null;
    private enhanceScript: Gs2Enhance.ScriptSetting|null = null;
    private logSetting: Gs2Enhance.LogSetting|null = null;
    private enableDirectEnhance: boolean|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;

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
    public getTransactionSetting(): Gs2Enhance.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Enhance.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Enhance.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getEnhanceScript(): Gs2Enhance.ScriptSetting|null {
        return this.enhanceScript;
    }
    public setEnhanceScript(enhanceScript: Gs2Enhance.ScriptSetting|null) {
        this.enhanceScript = enhanceScript;
        return this;
    }
    public withEnhanceScript(enhanceScript: Gs2Enhance.ScriptSetting|null): this {
        this.enhanceScript = enhanceScript;
        return this;
    }
    public getLogSetting(): Gs2Enhance.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Enhance.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Enhance.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }
    /** @deprecated */
    public getEnableDirectEnhance(): boolean|null {
        return this.enableDirectEnhance;
    }
    /** @deprecated */
    public setEnableDirectEnhance(enableDirectEnhance: boolean|null) {
        this.enableDirectEnhance = enableDirectEnhance;
        return this;
    }
    /** @deprecated */
    public withEnableDirectEnhance(enableDirectEnhance: boolean|null): this {
        this.enableDirectEnhance = enableDirectEnhance;
        return this;
    }
    /** @deprecated */
    public getQueueNamespaceId(): string|null {
        return this.queueNamespaceId;
    }
    /** @deprecated */
    public setQueueNamespaceId(queueNamespaceId: string|null) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }
    /** @deprecated */
    public withQueueNamespaceId(queueNamespaceId: string|null): this {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }
    /** @deprecated */
    public getKeyId(): string|null {
        return this.keyId;
    }
    /** @deprecated */
    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }
    /** @deprecated */
    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Enhance.TransactionSetting.fromDict(data["transactionSetting"]))
            .withEnhanceScript(Gs2Enhance.ScriptSetting.fromDict(data["enhanceScript"]))
            .withLogSetting(Gs2Enhance.LogSetting.fromDict(data["logSetting"]))
            .withEnableDirectEnhance(data["enableDirectEnhance"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "enhanceScript": this.getEnhanceScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "enableDirectEnhance": this.getEnableDirectEnhance(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
        };
    }
}