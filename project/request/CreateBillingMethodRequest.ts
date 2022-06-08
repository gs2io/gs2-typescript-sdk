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

import * as Gs2Project from '../model'

export default class CreateBillingMethodRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private accountToken: string|null = null;
    private description: string|null = null;
    private methodType: string|null = null;
    private cardCustomerId: string|null = null;
    private partnerId: string|null = null;

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
    public getAccountToken(): string|null {
        return this.accountToken;
    }
    public setAccountToken(accountToken: string|null) {
        this.accountToken = accountToken;
        return this;
    }
    public withAccountToken(accountToken: string|null): this {
        this.accountToken = accountToken;
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
    public getMethodType(): string|null {
        return this.methodType;
    }
    public setMethodType(methodType: string|null) {
        this.methodType = methodType;
        return this;
    }
    public withMethodType(methodType: string|null): this {
        this.methodType = methodType;
        return this;
    }
    public getCardCustomerId(): string|null {
        return this.cardCustomerId;
    }
    public setCardCustomerId(cardCustomerId: string|null) {
        this.cardCustomerId = cardCustomerId;
        return this;
    }
    public withCardCustomerId(cardCustomerId: string|null): this {
        this.cardCustomerId = cardCustomerId;
        return this;
    }
    public getPartnerId(): string|null {
        return this.partnerId;
    }
    public setPartnerId(partnerId: string|null) {
        this.partnerId = partnerId;
        return this;
    }
    public withPartnerId(partnerId: string|null): this {
        this.partnerId = partnerId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateBillingMethodRequest {
        return new CreateBillingMethodRequest()
            .withAccountToken(data["accountToken"])
            .withDescription(data["description"])
            .withMethodType(data["methodType"])
            .withCardCustomerId(data["cardCustomerId"])
            .withPartnerId(data["partnerId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accountToken": this.getAccountToken(),
            "description": this.getDescription(),
            "methodType": this.getMethodType(),
            "cardCustomerId": this.getCardCustomerId(),
            "partnerId": this.getPartnerId(),
        };
    }
}