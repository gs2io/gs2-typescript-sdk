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

import * as Gs2Experience from '../model'

export default class VerifyRankRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private experienceName: string|null = null;
    private verifyType: string|null = null;
    private propertyId: string|null = null;
    private rankValue: number|null = null;
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
    public getExperienceName(): string|null {
        return this.experienceName;
    }
    public setExperienceName(experienceName: string|null) {
        this.experienceName = experienceName;
        return this;
    }
    public withExperienceName(experienceName: string|null): this {
        this.experienceName = experienceName;
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
    public getRankValue(): number|null {
        return this.rankValue;
    }
    public setRankValue(rankValue: number|null) {
        this.rankValue = rankValue;
        return this;
    }
    public withRankValue(rankValue: number|null): this {
        this.rankValue = rankValue;
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

    public static fromDict(data: {[key: string]: any}): VerifyRankRequest {
        return new VerifyRankRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withExperienceName(data["experienceName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withRankValue(data["rankValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "experienceName": this.getExperienceName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "rankValue": this.getRankValue(),
        };
    }
}