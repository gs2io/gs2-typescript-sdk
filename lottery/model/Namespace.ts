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

import * as Gs2Lottery from '../../lottery/model'
import TransactionSetting from './TransactionSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Lottery.TransactionSetting|null = null;
    private lotteryTriggerScriptId: string|null = null;
    private choicePrizeTableScriptId: string|null = null;
    private logSetting: Gs2Lottery.LogSetting|null = null;
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
    public getTransactionSetting(): Gs2Lottery.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Lottery.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Lottery.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getLotteryTriggerScriptId(): string|null {
        return this.lotteryTriggerScriptId;
    }
    public setLotteryTriggerScriptId(lotteryTriggerScriptId: string|null) {
        this.lotteryTriggerScriptId = lotteryTriggerScriptId;
        return this;
    }
    public withLotteryTriggerScriptId(lotteryTriggerScriptId: string|null): this {
        this.lotteryTriggerScriptId = lotteryTriggerScriptId;
        return this;
    }
    public getChoicePrizeTableScriptId(): string|null {
        return this.choicePrizeTableScriptId;
    }
    public setChoicePrizeTableScriptId(choicePrizeTableScriptId: string|null) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    }
    public withChoicePrizeTableScriptId(choicePrizeTableScriptId: string|null): this {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    }
    public getLogSetting(): Gs2Lottery.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Lottery.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Lottery.LogSetting|null): this {
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
            .withTransactionSetting(Gs2Lottery.TransactionSetting.fromDict(data["transactionSetting"]))
            .withLotteryTriggerScriptId(data["lotteryTriggerScriptId"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"])
            .withLogSetting(Gs2Lottery.LogSetting.fromDict(data["logSetting"]))
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
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "lotteryTriggerScriptId": this.getLotteryTriggerScriptId(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "revision": this.getRevision(),
        };
    }
}
