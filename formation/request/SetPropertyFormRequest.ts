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

export default class SetPropertyFormRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private propertyFormModelName: string|null = null;
    private propertyId: string|null = null;
    private slots: Gs2Formation.Slot[]|null = null;
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
    public getAccessToken(): string|null {
        return this.accessToken;
    }
    public setAccessToken(accessToken: string|null) {
        this.accessToken = accessToken;
        return this;
    }
    public withAccessToken(accessToken: string|null): this {
        this.accessToken = accessToken;
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
    public getSlots(): Gs2Formation.Slot[]|null {
        return this.slots;
    }
    public setSlots(slots: Gs2Formation.Slot[]|null) {
        this.slots = slots;
        return this;
    }
    public withSlots(slots: Gs2Formation.Slot[]|null): this {
        this.slots = slots;
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

    public static fromDict(data: {[key: string]: any}): SetPropertyFormRequest {
        return new SetPropertyFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withPropertyId(data["propertyId"])
            .withSlots(data.slots ?
                data.slots.map((item: {[key: string]: any}) => {
                    return Gs2Formation.Slot.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "propertyId": this.getPropertyId(),
            "slots": this.getSlots() ?
                this.getSlots()!.map((item: Gs2Formation.Slot) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}