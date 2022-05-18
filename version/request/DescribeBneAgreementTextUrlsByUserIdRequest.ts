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

import * as Gs2Version from '../model'

export default class DescribeBneAgreementTextUrlsByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private bneAgreementClientId: string|null = null;
    private userId: string|null = null;
    private lang: string|null = null;

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

    public getBneAgreementClientId(): string|null {
        return this.bneAgreementClientId;
    }

    public setBneAgreementClientId(bneAgreementClientId: string|null) {
        this.bneAgreementClientId = bneAgreementClientId;
        return this;
    }

    public withBneAgreementClientId(bneAgreementClientId: string|null): this {
        this.bneAgreementClientId = bneAgreementClientId;
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

    public getLang(): string|null {
        return this.lang;
    }

    public setLang(lang: string|null) {
        this.lang = lang;
        return this;
    }

    public withLang(lang: string|null): this {
        this.lang = lang;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DescribeBneAgreementTextUrlsByUserIdRequest {
        return new DescribeBneAgreementTextUrlsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBneAgreementClientId(data["bneAgreementClientId"])
            .withUserId(data["userId"])
            .withLang(data["lang"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "bneAgreementClientId": this.getBneAgreementClientId(),
            "userId": this.getUserId(),
            "lang": this.getLang(),
        };
    }
}