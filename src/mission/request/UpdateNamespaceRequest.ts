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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Mission from '../model'

export class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private missionCompleteScript: Gs2Mission.ScriptSetting|null = null;
    private counterIncrementScript: Gs2Mission.ScriptSetting|null = null;
    private receiveRewardsScript: Gs2Mission.ScriptSetting|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private completeNotification: Gs2Mission.NotificationSetting|null = null;
    private logSetting: Gs2Mission.LogSetting|null = null;

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

    public getQueueNamespaceId(): string|null {
        return this.queueNamespaceId;
    }

    public setQueueNamespaceId(queueNamespaceId: string|null) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public withQueueNamespaceId(queueNamespaceId: string|null): this {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public getKeyId(): string|null {
        return this.keyId;
    }

    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }

    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
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

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withMissionCompleteScript(Gs2Mission.ScriptSetting.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(Gs2Mission.ScriptSetting.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(Gs2Mission.ScriptSetting.fromDict(data["receiveRewardsScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withCompleteNotification(Gs2Mission.NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(Gs2Mission.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "missionCompleteScript": this.getMissionCompleteScript()?.toDict(),
            "counterIncrementScript": this.getCounterIncrementScript()?.toDict(),
            "receiveRewardsScript": this.getReceiveRewardsScript()?.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "completeNotification": this.getCompleteNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}