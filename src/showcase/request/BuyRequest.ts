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

import * as Gs2Showcase from '../model'

export class BuyRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private showcaseName: string|null = null;
    private displayItemId: string|null = null;
    private accessToken: string|null = null;
    private config: Gs2Showcase.Config[]|null = null;

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

    public getShowcaseName(): string|null {
        return this.showcaseName;
    }

    public setShowcaseName(showcaseName: string|null) {
        this.showcaseName = showcaseName;
        return this;
    }

    public withShowcaseName(showcaseName: string|null): this {
        this.showcaseName = showcaseName;
        return this;
    }

    public getDisplayItemId(): string|null {
        return this.displayItemId;
    }

    public setDisplayItemId(displayItemId: string|null) {
        this.displayItemId = displayItemId;
        return this;
    }

    public withDisplayItemId(displayItemId: string|null): this {
        this.displayItemId = displayItemId;
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

    public getConfig(): Gs2Showcase.Config[]|null {
        return this.config;
    }

    public setConfig(config: Gs2Showcase.Config[]|null) {
        this.config = config;
        return this;
    }

    public withConfig(config: Gs2Showcase.Config[]|null): this {
        this.config = config;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BuyRequest {
        return new BuyRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemId(data["displayItemId"])
            .withAccessToken(data["accessToken"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.Config.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemId": this.getDisplayItemId(),
            "accessToken": this.getAccessToken(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Showcase.Config) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}