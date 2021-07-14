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

import * as Gs2Chat from '../model'

export class PostRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private roomName: string|null = null;
    private accessToken: string|null = null;
    private category: number|null = null;
    private metadata: string|null = null;
    private password: string|null = null;

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

    public getRoomName(): string|null {
        return this.roomName;
    }

    public setRoomName(roomName: string|null) {
        this.roomName = roomName;
        return this;
    }

    public withRoomName(roomName: string|null): this {
        this.roomName = roomName;
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

    public getCategory(): number|null {
        return this.category;
    }

    public setCategory(category: number|null) {
        this.category = category;
        return this;
    }

    public withCategory(category: number|null): this {
        this.category = category;
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

    public getPassword(): string|null {
        return this.password;
    }

    public setPassword(password: string|null) {
        this.password = password;
        return this;
    }

    public withPassword(password: string|null): this {
        this.password = password;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PostRequest {
        return new PostRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withAccessToken(data["accessToken"])
            .withCategory(data["category"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "accessToken": this.getAccessToken(),
            "category": this.getCategory(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
        };
    }
}