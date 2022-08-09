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

export default class PutLogRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private loggingNamespaceId: string|null = null;
    private logCategory: string|null = null;
    private payload: string|null = null;

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
    public getLoggingNamespaceId(): string|null {
        return this.loggingNamespaceId;
    }
    public setLoggingNamespaceId(loggingNamespaceId: string|null) {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    }
    public withLoggingNamespaceId(loggingNamespaceId: string|null): this {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    }
    public getLogCategory(): string|null {
        return this.logCategory;
    }
    public setLogCategory(logCategory: string|null) {
        this.logCategory = logCategory;
        return this;
    }
    public withLogCategory(logCategory: string|null): this {
        this.logCategory = logCategory;
        return this;
    }
    public getPayload(): string|null {
        return this.payload;
    }
    public setPayload(payload: string|null) {
        this.payload = payload;
        return this;
    }
    public withPayload(payload: string|null): this {
        this.payload = payload;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PutLogRequest {
        return new PutLogRequest()
            .withLoggingNamespaceId(data["loggingNamespaceId"])
            .withLogCategory(data["logCategory"])
            .withPayload(data["payload"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "loggingNamespaceId": this.getLoggingNamespaceId(),
            "logCategory": this.getLogCategory(),
            "payload": this.getPayload(),
        };
    }
}