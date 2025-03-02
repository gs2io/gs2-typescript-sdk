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

import * as Gs2Money2 from '../model'

export default class CreateStoreSubscriptionContentModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private scheduleNamespaceId: string|null = null;
    private triggerName: string|null = null;
    private appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent|null = null;
    private googlePlay: Gs2Money2.GooglePlaySubscriptionContent|null = null;

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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getScheduleNamespaceId(): string|null {
        return this.scheduleNamespaceId;
    }
    public setScheduleNamespaceId(scheduleNamespaceId: string|null) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    }
    public withScheduleNamespaceId(scheduleNamespaceId: string|null): this {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    }
    public getTriggerName(): string|null {
        return this.triggerName;
    }
    public setTriggerName(triggerName: string|null) {
        this.triggerName = triggerName;
        return this;
    }
    public withTriggerName(triggerName: string|null): this {
        this.triggerName = triggerName;
        return this;
    }
    public getAppleAppStore(): Gs2Money2.AppleAppStoreSubscriptionContent|null {
        return this.appleAppStore;
    }
    public setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent|null) {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent|null): this {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public getGooglePlay(): Gs2Money2.GooglePlaySubscriptionContent|null {
        return this.googlePlay;
    }
    public setGooglePlay(googlePlay: Gs2Money2.GooglePlaySubscriptionContent|null) {
        this.googlePlay = googlePlay;
        return this;
    }
    public withGooglePlay(googlePlay: Gs2Money2.GooglePlaySubscriptionContent|null): this {
        this.googlePlay = googlePlay;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateStoreSubscriptionContentModelMasterRequest {
        return new CreateStoreSubscriptionContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleNamespaceId(data["scheduleNamespaceId"])
            .withTriggerName(data["triggerName"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreSubscriptionContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySubscriptionContent.fromDict(data["googlePlay"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleNamespaceId": this.getScheduleNamespaceId(),
            "triggerName": this.getTriggerName(),
            "appleAppStore": this.getAppleAppStore()?.toDict(),
            "googlePlay": this.getGooglePlay()?.toDict(),
        };
    }
}