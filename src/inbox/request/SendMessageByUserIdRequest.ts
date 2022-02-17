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

import * as Gs2Inbox from '../model'

export default class SendMessageByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private metadata: string|null = null;
    private readAcquireActions: Gs2Inbox.AcquireAction[]|null = null;
    private expiresAt: number|null = null;
    private expiresTimeSpan: Gs2Inbox.TimeSpan|null = null;

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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getReadAcquireActions(): Gs2Inbox.AcquireAction[]|null {
        return this.readAcquireActions;
    }

    public setReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[]|null) {
        this.readAcquireActions = readAcquireActions;
        return this;
    }

    public withReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[]|null): this {
        this.readAcquireActions = readAcquireActions;
        return this;
    }

    public getExpiresAt(): number|null {
        return this.expiresAt;
    }

    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }

    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
        return this;
    }

    public getExpiresTimeSpan(): Gs2Inbox.TimeSpan|null {
        return this.expiresTimeSpan;
    }

    public setExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan|null) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }

    public withExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan|null): this {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SendMessageByUserIdRequest {
        return new SendMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
                data.readAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Inbox.AcquireAction.fromDict(item);
                }
            ) : [])
            .withExpiresAt(data["expiresAt"])
            .withExpiresTimeSpan(Gs2Inbox.TimeSpan.fromDict(data["expiresTimeSpan"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions()!.map((item: Gs2Inbox.AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "expiresAt": this.getExpiresAt(),
            "expiresTimeSpan": this.getExpiresTimeSpan()?.toDict(),
        };
    }
}