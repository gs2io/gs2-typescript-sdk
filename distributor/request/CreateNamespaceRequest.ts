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

import * as Gs2Distributor from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private assumeUserId: string|null = null;
    private autoRunStampSheetNotification: Gs2Distributor.NotificationSetting|null = null;
    private logSetting: Gs2Distributor.LogSetting|null = null;

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
    public getAssumeUserId(): string|null {
        return this.assumeUserId;
    }
    public setAssumeUserId(assumeUserId: string|null) {
        this.assumeUserId = assumeUserId;
        return this;
    }
    public withAssumeUserId(assumeUserId: string|null): this {
        this.assumeUserId = assumeUserId;
        return this;
    }
    public getAutoRunStampSheetNotification(): Gs2Distributor.NotificationSetting|null {
        return this.autoRunStampSheetNotification;
    }
    public setAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting|null) {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    }
    public withAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting|null): this {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    }
    public getLogSetting(): Gs2Distributor.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Distributor.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Distributor.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withAssumeUserId(data["assumeUserId"])
            .withAutoRunStampSheetNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunStampSheetNotification"]))
            .withLogSetting(Gs2Distributor.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "assumeUserId": this.getAssumeUserId(),
            "autoRunStampSheetNotification": this.getAutoRunStampSheetNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}