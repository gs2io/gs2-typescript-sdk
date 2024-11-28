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

export default class RunTransactionRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private ownerId: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private transaction: string|null = null;
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
    public getOwnerId(): string|null {
        return this.ownerId;
    }
    public setOwnerId(ownerId: string|null) {
        this.ownerId = ownerId;
        return this;
    }
    public withOwnerId(ownerId: string|null): this {
        this.ownerId = ownerId;
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
    public getTransaction(): string|null {
        return this.transaction;
    }
    public setTransaction(transaction: string|null) {
        this.transaction = transaction;
        return this;
    }
    public withTransaction(transaction: string|null): this {
        this.transaction = transaction;
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

    public static fromDict(data: {[key: string]: any}): RunTransactionRequest {
        return new RunTransactionRequest()
            .withOwnerId(data["ownerId"])
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTransaction(data["transaction"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "ownerId": this.getOwnerId(),
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "transaction": this.getTransaction(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    }
}