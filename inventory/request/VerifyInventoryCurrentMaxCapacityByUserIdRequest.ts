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

import * as Gs2Inventory from '../model'

export default class VerifyInventoryCurrentMaxCapacityByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private inventoryName: string|null = null;
    private verifyType: string|null = null;
    private currentInventoryMaxCapacity: number|null = null;
    private multiplyValueSpecifyingQuantity: boolean|null = null;
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
    public getInventoryName(): string|null {
        return this.inventoryName;
    }
    public setInventoryName(inventoryName: string|null) {
        this.inventoryName = inventoryName;
        return this;
    }
    public withInventoryName(inventoryName: string|null): this {
        this.inventoryName = inventoryName;
        return this;
    }
    public getVerifyType(): string|null {
        return this.verifyType;
    }
    public setVerifyType(verifyType: string|null) {
        this.verifyType = verifyType;
        return this;
    }
    public withVerifyType(verifyType: string|null): this {
        this.verifyType = verifyType;
        return this;
    }
    public getCurrentInventoryMaxCapacity(): number|null {
        return this.currentInventoryMaxCapacity;
    }
    public setCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number|null) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    }
    public withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number|null): this {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    }
    public getMultiplyValueSpecifyingQuantity(): boolean|null {
        return this.multiplyValueSpecifyingQuantity;
    }
    public setMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean|null) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    }
    public withMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean|null): this {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
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

    public static fromDict(data: {[key: string]: any}): VerifyInventoryCurrentMaxCapacityByUserIdRequest {
        return new VerifyInventoryCurrentMaxCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withInventoryName(data["inventoryName"])
            .withVerifyType(data["verifyType"])
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "inventoryName": this.getInventoryName(),
            "verifyType": this.getVerifyType(),
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    }
}