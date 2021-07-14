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

import IModel from '@/gs2/core/interface/IModel';

export class Mutex implements IModel {
    private mutexId: string|null = null;
    private userId: string|null = null;
    private propertyId: string|null = null;
    private transactionId: string|null = null;
    private createdAt: number|null = null;

    public getMutexId(): string|null {
        return this.mutexId;
    }

    public setMutexId(mutexId: string|null) {
        this.mutexId = mutexId;
        return this;
    }

    public withMutexId(mutexId: string|null): this {
        this.mutexId = mutexId;
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

    public getTransactionId(): string|null {
        return this.transactionId;
    }

    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }

    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
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

    public static fromDict(data: {[key: string]: any}): Mutex|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Mutex()
            .withMutexId(data["mutexId"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withTransactionId(data["transactionId"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "mutexId": this.getMutexId(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "transactionId": this.getTransactionId(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
