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

import * as Gs2Log from '../model'

export default class QueryExecuteStampSheetLogRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private service: string|null = null;
    private method: string|null = null;
    private userId: string|null = null;
    private action: string|null = null;
    private begin: number|null = null;
    private end: number|null = null;
    private longTerm: boolean|null = null;
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

    public getService(): string|null {
        return this.service;
    }

    public setService(service: string|null) {
        this.service = service;
        return this;
    }

    public withService(service: string|null): this {
        this.service = service;
        return this;
    }

    public getMethod(): string|null {
        return this.method;
    }

    public setMethod(method: string|null) {
        this.method = method;
        return this;
    }

    public withMethod(method: string|null): this {
        this.method = method;
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

    public getAction(): string|null {
        return this.action;
    }

    public setAction(action: string|null) {
        this.action = action;
        return this;
    }

    public withAction(action: string|null): this {
        this.action = action;
        return this;
    }

    public getBegin(): number|null {
        return this.begin;
    }

    public setBegin(begin: number|null) {
        this.begin = begin;
        return this;
    }

    public withBegin(begin: number|null): this {
        this.begin = begin;
        return this;
    }

    public getEnd(): number|null {
        return this.end;
    }

    public setEnd(end: number|null) {
        this.end = end;
        return this;
    }

    public withEnd(end: number|null): this {
        this.end = end;
        return this;
    }

    public getLongTerm(): boolean|null {
        return this.longTerm;
    }

    public setLongTerm(longTerm: boolean|null) {
        this.longTerm = longTerm;
        return this;
    }

    public withLongTerm(longTerm: boolean|null): this {
        this.longTerm = longTerm;
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

    public static fromDict(data: {[key: string]: any}): QueryExecuteStampSheetLogRequest {
        return new QueryExecuteStampSheetLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withLongTerm(data["longTerm"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "longTerm": this.getLongTerm(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    }
}