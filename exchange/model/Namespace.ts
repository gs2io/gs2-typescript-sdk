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

import * as Gs2Exchange from '../../exchange/model'
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private enableDirectExchange: boolean|null = null;
    private enableAwaitExchange: boolean|null = null;
    private transactionSetting: Gs2Exchange.TransactionSetting|null = null;
    private exchangeScript: Gs2Exchange.ScriptSetting|null = null;
    private incrementalExchangeScript: Gs2Exchange.ScriptSetting|null = null;
    private acquireAwaitScript: Gs2Exchange.ScriptSetting|null = null;
    private logSetting: Gs2Exchange.LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
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
    public getEnableDirectExchange(): boolean|null {
        return this.enableDirectExchange;
    }
    public setEnableDirectExchange(enableDirectExchange: boolean|null) {
        this.enableDirectExchange = enableDirectExchange;
        return this;
    }
    public withEnableDirectExchange(enableDirectExchange: boolean|null): this {
        this.enableDirectExchange = enableDirectExchange;
        return this;
    }
    public getEnableAwaitExchange(): boolean|null {
        return this.enableAwaitExchange;
    }
    public setEnableAwaitExchange(enableAwaitExchange: boolean|null) {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    }
    public withEnableAwaitExchange(enableAwaitExchange: boolean|null): this {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    }
    public getTransactionSetting(): Gs2Exchange.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Exchange.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Exchange.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getExchangeScript(): Gs2Exchange.ScriptSetting|null {
        return this.exchangeScript;
    }
    public setExchangeScript(exchangeScript: Gs2Exchange.ScriptSetting|null) {
        this.exchangeScript = exchangeScript;
        return this;
    }
    public withExchangeScript(exchangeScript: Gs2Exchange.ScriptSetting|null): this {
        this.exchangeScript = exchangeScript;
        return this;
    }
    public getIncrementalExchangeScript(): Gs2Exchange.ScriptSetting|null {
        return this.incrementalExchangeScript;
    }
    public setIncrementalExchangeScript(incrementalExchangeScript: Gs2Exchange.ScriptSetting|null) {
        this.incrementalExchangeScript = incrementalExchangeScript;
        return this;
    }
    public withIncrementalExchangeScript(incrementalExchangeScript: Gs2Exchange.ScriptSetting|null): this {
        this.incrementalExchangeScript = incrementalExchangeScript;
        return this;
    }
    public getAcquireAwaitScript(): Gs2Exchange.ScriptSetting|null {
        return this.acquireAwaitScript;
    }
    public setAcquireAwaitScript(acquireAwaitScript: Gs2Exchange.ScriptSetting|null) {
        this.acquireAwaitScript = acquireAwaitScript;
        return this;
    }
    public withAcquireAwaitScript(acquireAwaitScript: Gs2Exchange.ScriptSetting|null): this {
        this.acquireAwaitScript = acquireAwaitScript;
        return this;
    }
    public getLogSetting(): Gs2Exchange.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Exchange.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Exchange.LogSetting|null): this {
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
            .withEnableDirectExchange(data["enableDirectExchange"])
            .withEnableAwaitExchange(data["enableAwaitExchange"])
            .withTransactionSetting(Gs2Exchange.TransactionSetting.fromDict(data["transactionSetting"]))
            .withExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["exchangeScript"]))
            .withIncrementalExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["incrementalExchangeScript"]))
            .withAcquireAwaitScript(Gs2Exchange.ScriptSetting.fromDict(data["acquireAwaitScript"]))
            .withLogSetting(Gs2Exchange.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "enableDirectExchange": this.getEnableDirectExchange(),
            "enableAwaitExchange": this.getEnableAwaitExchange(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "exchangeScript": this.getExchangeScript()?.toDict(),
            "incrementalExchangeScript": this.getIncrementalExchangeScript()?.toDict(),
            "acquireAwaitScript": this.getAcquireAwaitScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "revision": this.getRevision(),
        };
    }
}
