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

import * as Gs2Mission from '../../mission/model'
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Mission.TransactionSetting|null = null;
    private missionCompleteScript: Gs2Mission.ScriptSetting|null = null;
    private counterIncrementScript: Gs2Mission.ScriptSetting|null = null;
    private receiveRewardsScript: Gs2Mission.ScriptSetting|null = null;
    private completeNotification: Gs2Mission.NotificationSetting|null = null;
    private logSetting: Gs2Mission.LogSetting|null = null;
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
    public getTransactionSetting(): Gs2Mission.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Mission.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Mission.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getMissionCompleteScript(): Gs2Mission.ScriptSetting|null {
        return this.missionCompleteScript;
    }
    public setMissionCompleteScript(missionCompleteScript: Gs2Mission.ScriptSetting|null) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    }
    public withMissionCompleteScript(missionCompleteScript: Gs2Mission.ScriptSetting|null): this {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    }
    public getCounterIncrementScript(): Gs2Mission.ScriptSetting|null {
        return this.counterIncrementScript;
    }
    public setCounterIncrementScript(counterIncrementScript: Gs2Mission.ScriptSetting|null) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    }
    public withCounterIncrementScript(counterIncrementScript: Gs2Mission.ScriptSetting|null): this {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    }
    public getReceiveRewardsScript(): Gs2Mission.ScriptSetting|null {
        return this.receiveRewardsScript;
    }
    public setReceiveRewardsScript(receiveRewardsScript: Gs2Mission.ScriptSetting|null) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    }
    public withReceiveRewardsScript(receiveRewardsScript: Gs2Mission.ScriptSetting|null): this {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    }
    public getCompleteNotification(): Gs2Mission.NotificationSetting|null {
        return this.completeNotification;
    }
    public setCompleteNotification(completeNotification: Gs2Mission.NotificationSetting|null) {
        this.completeNotification = completeNotification;
        return this;
    }
    public withCompleteNotification(completeNotification: Gs2Mission.NotificationSetting|null): this {
        this.completeNotification = completeNotification;
        return this;
    }
    public getLogSetting(): Gs2Mission.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Mission.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Mission.LogSetting|null): this {
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
            .withTransactionSetting(Gs2Mission.TransactionSetting.fromDict(data["transactionSetting"]))
            .withMissionCompleteScript(Gs2Mission.ScriptSetting.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(Gs2Mission.ScriptSetting.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(Gs2Mission.ScriptSetting.fromDict(data["receiveRewardsScript"]))
            .withCompleteNotification(Gs2Mission.NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(Gs2Mission.LogSetting.fromDict(data["logSetting"]))
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
            "missionCompleteScript": this.getMissionCompleteScript()?.toDict(),
            "counterIncrementScript": this.getCounterIncrementScript()?.toDict(),
            "receiveRewardsScript": this.getReceiveRewardsScript()?.toDict(),
            "completeNotification": this.getCompleteNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "revision": this.getRevision(),
        };
    }
}
