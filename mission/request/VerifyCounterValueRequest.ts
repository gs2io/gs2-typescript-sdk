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

import * as Gs2Mission from '../model'

export default class VerifyCounterValueRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private counterName: string|null = null;
    private verifyType: string|null = null;
    private scopeType: string|null = null;
    private resetType: string|null = null;
    private conditionName: string|null = null;
    private value: number|null = null;
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
    public getScopeType(): string|null {
        return this.scopeType;
    }
    public setScopeType(scopeType: string|null) {
        this.scopeType = scopeType;
        return this;
    }
    public withScopeType(scopeType: string|null): this {
        this.scopeType = scopeType;
        return this;
    }
    public getResetType(): string|null {
        return this.resetType;
    }
    public setResetType(resetType: string|null) {
        this.resetType = resetType;
        return this;
    }
    public withResetType(resetType: string|null): this {
        this.resetType = resetType;
        return this;
    }
    public getConditionName(): string|null {
        return this.conditionName;
    }
    public setConditionName(conditionName: string|null) {
        this.conditionName = conditionName;
        return this;
    }
    public withConditionName(conditionName: string|null): this {
        this.conditionName = conditionName;
        return this;
    }
    public getValue(): number|null {
        return this.value;
    }
    public setValue(value: number|null) {
        this.value = value;
        return this;
    }
    public withValue(value: number|null): this {
        this.value = value;
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

    public static fromDict(data: {[key: string]: any}): VerifyCounterValueRequest {
        return new VerifyCounterValueRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCounterName(data["counterName"])
            .withVerifyType(data["verifyType"])
            .withScopeType(data["scopeType"])
            .withResetType(data["resetType"])
            .withConditionName(data["conditionName"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "counterName": this.getCounterName(),
            "verifyType": this.getVerifyType(),
            "scopeType": this.getScopeType(),
            "resetType": this.getResetType(),
            "conditionName": this.getConditionName(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    }
}