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

import * as Gs2JobQueue from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2JobQueue.TransactionSetting|null = null;
    private enableAutoRun: boolean|null = null;
    private pushNotification: Gs2JobQueue.NotificationSetting|null = null;
    private runNotification: Gs2JobQueue.NotificationSetting|null = null;
    private logSetting: Gs2JobQueue.LogSetting|null = null;

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
    public getTransactionSetting(): Gs2JobQueue.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2JobQueue.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2JobQueue.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getEnableAutoRun(): boolean|null {
        return this.enableAutoRun;
    }
    public setEnableAutoRun(enableAutoRun: boolean|null) {
        this.enableAutoRun = enableAutoRun;
        return this;
    }
    public withEnableAutoRun(enableAutoRun: boolean|null): this {
        this.enableAutoRun = enableAutoRun;
        return this;
    }
    public getPushNotification(): Gs2JobQueue.NotificationSetting|null {
        return this.pushNotification;
    }
    public setPushNotification(pushNotification: Gs2JobQueue.NotificationSetting|null) {
        this.pushNotification = pushNotification;
        return this;
    }
    public withPushNotification(pushNotification: Gs2JobQueue.NotificationSetting|null): this {
        this.pushNotification = pushNotification;
        return this;
    }
    public getRunNotification(): Gs2JobQueue.NotificationSetting|null {
        return this.runNotification;
    }
    public setRunNotification(runNotification: Gs2JobQueue.NotificationSetting|null) {
        this.runNotification = runNotification;
        return this;
    }
    public withRunNotification(runNotification: Gs2JobQueue.NotificationSetting|null): this {
        this.runNotification = runNotification;
        return this;
    }
    public getLogSetting(): Gs2JobQueue.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2JobQueue.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2JobQueue.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2JobQueue.TransactionSetting.fromDict(data["transactionSetting"]))
            .withEnableAutoRun(data["enableAutoRun"])
            .withPushNotification(Gs2JobQueue.NotificationSetting.fromDict(data["pushNotification"]))
            .withRunNotification(Gs2JobQueue.NotificationSetting.fromDict(data["runNotification"]))
            .withLogSetting(Gs2JobQueue.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "enableAutoRun": this.getEnableAutoRun(),
            "pushNotification": this.getPushNotification()?.toDict(),
            "runNotification": this.getRunNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}