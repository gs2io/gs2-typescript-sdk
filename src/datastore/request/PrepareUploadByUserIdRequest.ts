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

import * as Gs2Datastore from '../model'

export class PrepareUploadByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private name: string|null = null;
    private contentType: string|null = null;
    private scope: string|null = null;
    private allowUserIds: string[]|null = null;
    private updateIfExists: boolean|null = null;

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

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
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

    public getScope(): string|null {
        return this.scope;
    }

    public setScope(scope: string|null) {
        this.scope = scope;
        return this;
    }

    public withScope(scope: string|null): this {
        this.scope = scope;
        return this;
    }

    public getAllowUserIds(): string[]|null {
        return this.allowUserIds;
    }

    public setAllowUserIds(allowUserIds: string[]|null) {
        this.allowUserIds = allowUserIds;
        return this;
    }

    public withAllowUserIds(allowUserIds: string[]|null): this {
        this.allowUserIds = allowUserIds;
        return this;
    }

    public getUpdateIfExists(): boolean|null {
        return this.updateIfExists;
    }

    public setUpdateIfExists(updateIfExists: boolean|null) {
        this.updateIfExists = updateIfExists;
        return this;
    }

    public withUpdateIfExists(updateIfExists: boolean|null): this {
        this.updateIfExists = updateIfExists;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PrepareUploadByUserIdRequest {
        return new PrepareUploadByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withContentType(data["contentType"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
                data.allowUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withUpdateIfExists(data["updateIfExists"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "contentType": this.getContentType(),
            "scope": this.getScope(),
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "updateIfExists": this.getUpdateIfExists(),
        };
    }
}