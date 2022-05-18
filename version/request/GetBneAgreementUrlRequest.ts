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

export default class GetBneAgreementUrlRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private bneAgreementClientId: string|null = null;
    private accessToken: string|null = null;
    private lang: string|null = null;
    private callbackUrl: string|null = null;
    private visibleBrandLogo: boolean|null = null;

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

    public getCallbackUrl(): string|null {
        return this.callbackUrl;
    }

    public setCallbackUrl(callbackUrl: string|null) {
        this.callbackUrl = callbackUrl;
        return this;
    }

    public withCallbackUrl(callbackUrl: string|null): this {
        this.callbackUrl = callbackUrl;
        return this;
    }

    public getVisibleBrandLogo(): boolean|null {
        return this.visibleBrandLogo;
    }

    public setVisibleBrandLogo(visibleBrandLogo: boolean|null) {
        this.visibleBrandLogo = visibleBrandLogo;
        return this;
    }

    public withVisibleBrandLogo(visibleBrandLogo: boolean|null): this {
        this.visibleBrandLogo = visibleBrandLogo;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetBneAgreementUrlRequest {
        return new GetBneAgreementUrlRequest()
            .withNamespaceName(data["namespaceName"])
            .withBneAgreementClientId(data["bneAgreementClientId"])
            .withAccessToken(data["accessToken"])
            .withLang(data["lang"])
            .withCallbackUrl(data["callbackUrl"])
            .withVisibleBrandLogo(data["visibleBrandLogo"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "bneAgreementClientId": this.getBneAgreementClientId(),
            "accessToken": this.getAccessToken(),
            "lang": this.getLang(),
            "callbackUrl": this.getCallbackUrl(),
            "visibleBrandLogo": this.getVisibleBrandLogo(),
        };
    }
}