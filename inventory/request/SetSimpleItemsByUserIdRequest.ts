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

export default class SetSimpleItemsByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private inventoryName: string|null = null;
    private userId: string|null = null;
    private counts: Gs2Inventory.HeldCount[]|null = null;
    private timeOffsetToken: string|null = null;
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
    public getCounts(): Gs2Inventory.HeldCount[]|null {
        return this.counts;
    }
    public setCounts(counts: Gs2Inventory.HeldCount[]|null) {
        this.counts = counts;
        return this;
    }
    public withCounts(counts: Gs2Inventory.HeldCount[]|null): this {
        this.counts = counts;
        return this;
    }
    public getTimeOffsetToken(): string|null {
        return this.timeOffsetToken;
    }
    public setTimeOffsetToken(timeOffsetToken: string|null) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    }
    public withTimeOffsetToken(timeOffsetToken: string|null): this {
        this.timeOffsetToken = timeOffsetToken;
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

    public static fromDict(data: {[key: string]: any}): SetSimpleItemsByUserIdRequest {
        return new SetSimpleItemsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withCounts(data.counts ?
                data.counts.map((item: {[key: string]: any}) => {
                    return Gs2Inventory.HeldCount.fromDict(item);
                }
            ) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "counts": this.getCounts() ?
                this.getCounts()!.map((item: Gs2Inventory.HeldCount) => {
                    return item.toDict();
                }
            ) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    }
}