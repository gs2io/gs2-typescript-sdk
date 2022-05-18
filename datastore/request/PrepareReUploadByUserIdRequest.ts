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

import * as Gs2Datastore from '../model'

export default class PrepareReUploadByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private dataObjectName: string|null = null;
    private userId: string|null = null;
    private contentType: string|null = null;
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

    public getDataObjectName(): string|null {
        return this.dataObjectName;
    }

    public setDataObjectName(dataObjectName: string|null) {
        this.dataObjectName = dataObjectName;
        return this;
    }

    public withDataObjectName(dataObjectName: string|null): this {
        this.dataObjectName = dataObjectName;
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

    public getContentType(): string|null {
        return this.contentType;
    }

    public setContentType(contentType: string|null) {
        this.contentType = contentType;
        return this;
    }

    public withContentType(contentType: string|null): this {
        this.contentType = contentType;
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

    public static fromDict(data: {[key: string]: any}): PrepareReUploadByUserIdRequest {
        return new PrepareReUploadByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withUserId(data["userId"])
            .withContentType(data["contentType"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "userId": this.getUserId(),
            "contentType": this.getContentType(),
        };
    }
}