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

import * as Gs2Enchant from '../model'

export default class VerifyRarityParameterStatusRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private parameterName: string|null = null;
    private accessToken: string|null = null;
    private propertyId: string|null = null;
    private verifyType: string|null = null;
    private parameterValueName: string|null = null;
    private parameterCount: number|null = null;
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
    public getParameterName(): string|null {
        return this.parameterName;
    }
    public setParameterName(parameterName: string|null) {
        this.parameterName = parameterName;
        return this;
    }
    public withParameterName(parameterName: string|null): this {
        this.parameterName = parameterName;
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
    public getParameterValueName(): string|null {
        return this.parameterValueName;
    }
    public setParameterValueName(parameterValueName: string|null) {
        this.parameterValueName = parameterValueName;
        return this;
    }
    public withParameterValueName(parameterValueName: string|null): this {
        this.parameterValueName = parameterValueName;
        return this;
    }
    public getParameterCount(): number|null {
        return this.parameterCount;
    }
    public setParameterCount(parameterCount: number|null) {
        this.parameterCount = parameterCount;
        return this;
    }
    public withParameterCount(parameterCount: number|null): this {
        this.parameterCount = parameterCount;
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

    public static fromDict(data: {[key: string]: any}): VerifyRarityParameterStatusRequest {
        return new VerifyRarityParameterStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"])
            .withAccessToken(data["accessToken"])
            .withPropertyId(data["propertyId"])
            .withVerifyType(data["verifyType"])
            .withParameterValueName(data["parameterValueName"])
            .withParameterCount(data["parameterCount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
            "accessToken": this.getAccessToken(),
            "propertyId": this.getPropertyId(),
            "verifyType": this.getVerifyType(),
            "parameterValueName": this.getParameterValueName(),
            "parameterCount": this.getParameterCount(),
        };
    }
}