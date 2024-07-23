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

import * as Gs2Guild from '../model'

export default class DescribeIgnoreUsersByGuildNameRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private guildModelName: string|null = null;
    private guildName: string|null = null;
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
    public getGuildModelName(): string|null {
        return this.guildModelName;
    }
    public setGuildModelName(guildModelName: string|null) {
        this.guildModelName = guildModelName;
        return this;
    }
    public withGuildModelName(guildModelName: string|null): this {
        this.guildModelName = guildModelName;
        return this;
    }
    public getGuildName(): string|null {
        return this.guildName;
    }
    public setGuildName(guildName: string|null) {
        this.guildName = guildName;
        return this;
    }
    public withGuildName(guildName: string|null): this {
        this.guildName = guildName;
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

    public static fromDict(data: {[key: string]: any}): DescribeIgnoreUsersByGuildNameRequest {
        return new DescribeIgnoreUsersByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    }
}