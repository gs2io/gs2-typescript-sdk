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

import * as Gs2Account from '../model'

export default class DescribeBnlinksRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private bnidClientId: string|null = null;
    private accessToken: string|null = null;
    private ipGroupId: string|null = null;
    private alive: boolean|null = null;
    private pageToken: string|null = null;
    private limit: number|null = null;

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

    public getBnidClientId(): string|null {
        return this.bnidClientId;
    }

    public setBnidClientId(bnidClientId: string|null) {
        this.bnidClientId = bnidClientId;
        return this;
    }

    public withBnidClientId(bnidClientId: string|null): this {
        this.bnidClientId = bnidClientId;
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

    public getIpGroupId(): string|null {
        return this.ipGroupId;
    }

    public setIpGroupId(ipGroupId: string|null) {
        this.ipGroupId = ipGroupId;
        return this;
    }

    public withIpGroupId(ipGroupId: string|null): this {
        this.ipGroupId = ipGroupId;
        return this;
    }

    public getAlive(): boolean|null {
        return this.alive;
    }

    public setAlive(alive: boolean|null) {
        this.alive = alive;
        return this;
    }

    public withAlive(alive: boolean|null): this {
        this.alive = alive;
        return this;
    }

    public getPageToken(): string|null {
        return this.pageToken;
    }

    public setPageToken(pageToken: string|null) {
        this.pageToken = pageToken;
        return this;
    }

    public withPageToken(pageToken: string|null): this {
        this.pageToken = pageToken;
        return this;
    }

    public getLimit(): number|null {
        return this.limit;
    }

    public setLimit(limit: number|null) {
        this.limit = limit;
        return this;
    }

    public withLimit(limit: number|null): this {
        this.limit = limit;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DescribeBnlinksRequest {
        return new DescribeBnlinksRequest()
            .withNamespaceName(data["namespaceName"])
            .withBnidClientId(data["bnidClientId"])
            .withAccessToken(data["accessToken"])
            .withIpGroupId(data["ipGroupId"])
            .withAlive(data["alive"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "bnidClientId": this.getBnidClientId(),
            "accessToken": this.getAccessToken(),
            "ipGroupId": this.getIpGroupId(),
            "alive": this.getAlive(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    }
}