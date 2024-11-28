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

export default class SearchGuildsRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private guildModelName: string|null = null;
    private accessToken: string|null = null;
    private displayName: string|null = null;
    private attributes1: number[]|null = null;
    private attributes2: number[]|null = null;
    private attributes3: number[]|null = null;
    private attributes4: number[]|null = null;
    private attributes5: number[]|null = null;
    private joinPolicies: string[]|null = null;
    private includeFullMembersGuild: boolean|null = null;
    private orderBy: string|null = null;
    private pageToken: string|null = null;
    private limit: number|null = null;
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
    public getDisplayName(): string|null {
        return this.displayName;
    }
    public setDisplayName(displayName: string|null) {
        this.displayName = displayName;
        return this;
    }
    public withDisplayName(displayName: string|null): this {
        this.displayName = displayName;
        return this;
    }
    public getAttributes1(): number[]|null {
        return this.attributes1;
    }
    public setAttributes1(attributes1: number[]|null) {
        this.attributes1 = attributes1;
        return this;
    }
    public withAttributes1(attributes1: number[]|null): this {
        this.attributes1 = attributes1;
        return this;
    }
    public getAttributes2(): number[]|null {
        return this.attributes2;
    }
    public setAttributes2(attributes2: number[]|null) {
        this.attributes2 = attributes2;
        return this;
    }
    public withAttributes2(attributes2: number[]|null): this {
        this.attributes2 = attributes2;
        return this;
    }
    public getAttributes3(): number[]|null {
        return this.attributes3;
    }
    public setAttributes3(attributes3: number[]|null) {
        this.attributes3 = attributes3;
        return this;
    }
    public withAttributes3(attributes3: number[]|null): this {
        this.attributes3 = attributes3;
        return this;
    }
    public getAttributes4(): number[]|null {
        return this.attributes4;
    }
    public setAttributes4(attributes4: number[]|null) {
        this.attributes4 = attributes4;
        return this;
    }
    public withAttributes4(attributes4: number[]|null): this {
        this.attributes4 = attributes4;
        return this;
    }
    public getAttributes5(): number[]|null {
        return this.attributes5;
    }
    public setAttributes5(attributes5: number[]|null) {
        this.attributes5 = attributes5;
        return this;
    }
    public withAttributes5(attributes5: number[]|null): this {
        this.attributes5 = attributes5;
        return this;
    }
    public getJoinPolicies(): string[]|null {
        return this.joinPolicies;
    }
    public setJoinPolicies(joinPolicies: string[]|null) {
        this.joinPolicies = joinPolicies;
        return this;
    }
    public withJoinPolicies(joinPolicies: string[]|null): this {
        this.joinPolicies = joinPolicies;
        return this;
    }
    public getIncludeFullMembersGuild(): boolean|null {
        return this.includeFullMembersGuild;
    }
    public setIncludeFullMembersGuild(includeFullMembersGuild: boolean|null) {
        this.includeFullMembersGuild = includeFullMembersGuild;
        return this;
    }
    public withIncludeFullMembersGuild(includeFullMembersGuild: boolean|null): this {
        this.includeFullMembersGuild = includeFullMembersGuild;
        return this;
    }
    public getOrderBy(): string|null {
        return this.orderBy;
    }
    public setOrderBy(orderBy: string|null) {
        this.orderBy = orderBy;
        return this;
    }
    public withOrderBy(orderBy: string|null): this {
        this.orderBy = orderBy;
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

    public static fromDict(data: {[key: string]: any}): SearchGuildsRequest {
        return new SearchGuildsRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withDisplayName(data["displayName"])
            .withAttributes1(data.attributes1 ?
                data.attributes1.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withAttributes2(data.attributes2 ?
                data.attributes2.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withAttributes3(data.attributes3 ?
                data.attributes3.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withAttributes4(data.attributes4 ?
                data.attributes4.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withAttributes5(data.attributes5 ?
                data.attributes5.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withJoinPolicies(data.joinPolicies ?
                data.joinPolicies.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withIncludeFullMembersGuild(data["includeFullMembersGuild"])
            .withOrderBy(data["orderBy"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "displayName": this.getDisplayName(),
            "attributes1": this.getAttributes1() ?
                this.getAttributes1()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "attributes2": this.getAttributes2() ?
                this.getAttributes2()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "attributes3": this.getAttributes3() ?
                this.getAttributes3()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "attributes4": this.getAttributes4() ?
                this.getAttributes4()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "attributes5": this.getAttributes5() ?
                this.getAttributes5()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "joinPolicies": this.getJoinPolicies() ?
                this.getJoinPolicies()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "includeFullMembersGuild": this.getIncludeFullMembersGuild(),
            "orderBy": this.getOrderBy(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    }
}