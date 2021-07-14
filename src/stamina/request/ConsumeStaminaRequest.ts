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

import * as Gs2Stamina from '../model'

export class ConsumeStaminaRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private staminaName: string|null = null;
    private accessToken: string|null = null;
    private consumeValue: number|null = null;

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

    public getStaminaName(): string|null {
        return this.staminaName;
    }

    public setStaminaName(staminaName: string|null) {
        this.staminaName = staminaName;
        return this;
    }

    public withStaminaName(staminaName: string|null): this {
        this.staminaName = staminaName;
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

    public getConsumeValue(): number|null {
        return this.consumeValue;
    }

    public setConsumeValue(consumeValue: number|null) {
        this.consumeValue = consumeValue;
        return this;
    }

    public withConsumeValue(consumeValue: number|null): this {
        this.consumeValue = consumeValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ConsumeStaminaRequest {
        return new ConsumeStaminaRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"])
            .withConsumeValue(data["consumeValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
            "consumeValue": this.getConsumeValue(),
        };
    }
}