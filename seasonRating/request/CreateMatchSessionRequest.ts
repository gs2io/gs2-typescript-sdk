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

import * as Gs2SeasonRating from '../model'

export default class CreateMatchSessionRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private sessionName: string|null = null;
    private ttlSeconds: number|null = null;

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
    public getSessionName(): string|null {
        return this.sessionName;
    }
    public setSessionName(sessionName: string|null) {
        this.sessionName = sessionName;
        return this;
    }
    public withSessionName(sessionName: string|null): this {
        this.sessionName = sessionName;
        return this;
    }
    public getTtlSeconds(): number|null {
        return this.ttlSeconds;
    }
    public setTtlSeconds(ttlSeconds: number|null) {
        this.ttlSeconds = ttlSeconds;
        return this;
    }
    public withTtlSeconds(ttlSeconds: number|null): this {
        this.ttlSeconds = ttlSeconds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateMatchSessionRequest {
        return new CreateMatchSessionRequest()
            .withNamespaceName(data["namespaceName"])
            .withSessionName(data["sessionName"])
            .withTtlSeconds(data["ttlSeconds"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "sessionName": this.getSessionName(),
            "ttlSeconds": this.getTtlSeconds(),
        };
    }
}