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

import * as Gs2Lock from '../model'

export class LockRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private propertyId: string|null = null;
    private accessToken: string|null = null;
    private transactionId: string|null = null;
    private ttl: number|null = null;

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

    public getTtl(): number|null {
        return this.ttl;
    }

    public setTtl(ttl: number|null) {
        this.ttl = ttl;
        return this;
    }

    public withTtl(ttl: number|null): this {
        this.ttl = ttl;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LockRequest {
        return new LockRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyId(data["propertyId"])
            .withAccessToken(data["accessToken"])
            .withTransactionId(data["transactionId"])
            .withTtl(data["ttl"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyId": this.getPropertyId(),
            "accessToken": this.getAccessToken(),
            "transactionId": this.getTransactionId(),
            "ttl": this.getTtl(),
        };
    }
}