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

import * as Gs2Ranking from '../model'

export default class GetScoreRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private categoryName: string|null = null;
    private accessToken: string|null = null;
    private scorerUserId: string|null = null;
    private uniqueId: string|null = null;

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

    public getCategoryName(): string|null {
        return this.categoryName;
    }

    public setCategoryName(categoryName: string|null) {
        this.categoryName = categoryName;
        return this;
    }

    public withCategoryName(categoryName: string|null): this {
        this.categoryName = categoryName;
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

    public getScorerUserId(): string|null {
        return this.scorerUserId;
    }

    public setScorerUserId(scorerUserId: string|null) {
        this.scorerUserId = scorerUserId;
        return this;
    }

    public withScorerUserId(scorerUserId: string|null): this {
        this.scorerUserId = scorerUserId;
        return this;
    }

    public getUniqueId(): string|null {
        return this.uniqueId;
    }

    public setUniqueId(uniqueId: string|null) {
        this.uniqueId = uniqueId;
        return this;
    }

    public withUniqueId(uniqueId: string|null): this {
        this.uniqueId = uniqueId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetScoreRequest {
        return new GetScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withScorerUserId(data["scorerUserId"])
            .withUniqueId(data["uniqueId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "scorerUserId": this.getScorerUserId(),
            "uniqueId": this.getUniqueId(),
        };
    }
}