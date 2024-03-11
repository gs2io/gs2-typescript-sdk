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

import * as Gs2Chat from '../model'

export default class UpdateRoomFromBackendRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private roomName: string|null = null;
    private metadata: string|null = null;
    private password: string|null = null;
    private whiteListUserIds: string[]|null = null;
    private userId: string|null = null;
    private timeOffsetToken: string|null = null;
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
    public getWhiteListUserIds(): string[]|null {
        return this.whiteListUserIds;
    }
    public setWhiteListUserIds(whiteListUserIds: string[]|null) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    }
    public withWhiteListUserIds(whiteListUserIds: string[]|null): this {
        this.whiteListUserIds = whiteListUserIds;
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
    public getTimeOffsetToken(): string|null {
        return this.timeOffsetToken;
    }
    public setTimeOffsetToken(timeOffsetToken: string|null) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    }
    public withTimeOffsetToken(timeOffsetToken: string|null): this {
        this.timeOffsetToken = timeOffsetToken;
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

    public static fromDict(data: {[key: string]: any}): UpdateRoomFromBackendRequest {
        return new UpdateRoomFromBackendRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
                data.whiteListUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    }
}