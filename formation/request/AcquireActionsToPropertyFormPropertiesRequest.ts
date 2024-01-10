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

import * as Gs2Formation from '../model'

export default class AcquireActionsToPropertyFormPropertiesRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private propertyFormModelName: string|null = null;
    private propertyId: string|null = null;
    private acquireAction: Gs2Formation.AcquireAction|null = null;
    private config: Gs2Formation.Config[]|null = null;
    private duplicationAvoider: string|null = null;

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
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getPropertyFormModelName(): string|null {
        return this.propertyFormModelName;
    }
    public setPropertyFormModelName(propertyFormModelName: string|null) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    }
    public withPropertyFormModelName(propertyFormModelName: string|null): this {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    }
    public getPropertyId(): string|null {
        return this.propertyId;
    }
    public setPropertyId(propertyId: string|null) {
        this.propertyId = propertyId;
        return this;
    }
    public withPropertyId(propertyId: string|null): this {
        this.propertyId = propertyId;
        return this;
    }
    public getAcquireAction(): Gs2Formation.AcquireAction|null {
        return this.acquireAction;
    }
    public setAcquireAction(acquireAction: Gs2Formation.AcquireAction|null) {
        this.acquireAction = acquireAction;
        return this;
    }
    public withAcquireAction(acquireAction: Gs2Formation.AcquireAction|null): this {
        this.acquireAction = acquireAction;
        return this;
    }
    public getConfig(): Gs2Formation.Config[]|null {
        return this.config;
    }
    public setConfig(config: Gs2Formation.Config[]|null) {
        this.config = config;
        return this;
    }
    public withConfig(config: Gs2Formation.Config[]|null): this {
        this.config = config;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireActionsToPropertyFormPropertiesRequest {
        return new AcquireActionsToPropertyFormPropertiesRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withPropertyId(data["propertyId"])
            .withAcquireAction(Gs2Formation.AcquireAction.fromDict(data["acquireAction"]))
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Formation.Config.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "propertyId": this.getPropertyId(),
            "acquireAction": this.getAcquireAction()?.toDict(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Formation.Config) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}