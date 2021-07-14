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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Limit from '../model'

export class CountUpByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private limitName: string|null = null;
    private counterName: string|null = null;
    private userId: string|null = null;
    private countUpValue: number|null = null;
    private maxValue: number|null = null;

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

    public getLimitName(): string|null {
        return this.limitName;
    }

    public setLimitName(limitName: string|null) {
        this.limitName = limitName;
        return this;
    }

    public withLimitName(limitName: string|null): this {
        this.limitName = limitName;
        return this;
    }

    public getCounterName(): string|null {
        return this.counterName;
    }

    public setCounterName(counterName: string|null) {
        this.counterName = counterName;
        return this;
    }

    public withCounterName(counterName: string|null): this {
        this.counterName = counterName;
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

    public getCountUpValue(): number|null {
        return this.countUpValue;
    }

    public setCountUpValue(countUpValue: number|null) {
        this.countUpValue = countUpValue;
        return this;
    }

    public withCountUpValue(countUpValue: number|null): this {
        this.countUpValue = countUpValue;
        return this;
    }

    public getMaxValue(): number|null {
        return this.maxValue;
    }

    public setMaxValue(maxValue: number|null) {
        this.maxValue = maxValue;
        return this;
    }

    public withMaxValue(maxValue: number|null): this {
        this.maxValue = maxValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CountUpByUserIdRequest {
        return new CountUpByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withUserId(data["userId"])
            .withCountUpValue(data["countUpValue"])
            .withMaxValue(data["maxValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "userId": this.getUserId(),
            "countUpValue": this.getCountUpValue(),
            "maxValue": this.getMaxValue(),
        };
    }
}