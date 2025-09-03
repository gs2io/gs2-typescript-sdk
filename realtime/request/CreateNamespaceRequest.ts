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

import * as Gs2Realtime from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Realtime.TransactionSetting|null = null;
    private serverType: string|null = null;
    private serverSpec: string|null = null;
    private createNotification: Gs2Realtime.NotificationSetting|null = null;
    private logSetting: Gs2Realtime.LogSetting|null = null;

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
    public getTransactionSetting(): Gs2Realtime.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Realtime.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Realtime.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getServerType(): string|null {
        return this.serverType;
    }
    public setServerType(serverType: string|null) {
        this.serverType = serverType;
        return this;
    }
    public withServerType(serverType: string|null): this {
        this.serverType = serverType;
        return this;
    }
    public getServerSpec(): string|null {
        return this.serverSpec;
    }
    public setServerSpec(serverSpec: string|null) {
        this.serverSpec = serverSpec;
        return this;
    }
    public withServerSpec(serverSpec: string|null): this {
        this.serverSpec = serverSpec;
        return this;
    }
    public getCreateNotification(): Gs2Realtime.NotificationSetting|null {
        return this.createNotification;
    }
    public setCreateNotification(createNotification: Gs2Realtime.NotificationSetting|null) {
        this.createNotification = createNotification;
        return this;
    }
    public withCreateNotification(createNotification: Gs2Realtime.NotificationSetting|null): this {
        this.createNotification = createNotification;
        return this;
    }
    public getLogSetting(): Gs2Realtime.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Realtime.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Realtime.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Realtime.TransactionSetting.fromDict(data["transactionSetting"]))
            .withServerType(data["serverType"])
            .withServerSpec(data["serverSpec"])
            .withCreateNotification(Gs2Realtime.NotificationSetting.fromDict(data["createNotification"]))
            .withLogSetting(Gs2Realtime.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "serverType": this.getServerType(),
            "serverSpec": this.getServerSpec(),
            "createNotification": this.getCreateNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}