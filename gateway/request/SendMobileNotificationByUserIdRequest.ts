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

import * as Gs2Gateway from '../model'

export default class SendMobileNotificationByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private subject: string|null = null;
    private payload: string|null = null;
    private sound: string|null = null;
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

    public getSubject(): string|null {
        return this.subject;
    }

    public setSubject(subject: string|null) {
        this.subject = subject;
        return this;
    }

    public withSubject(subject: string|null): this {
        this.subject = subject;
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

    public getSound(): string|null {
        return this.sound;
    }

    public setSound(sound: string|null) {
        this.sound = sound;
        return this;
    }

    public withSound(sound: string|null): this {
        this.sound = sound;
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

    public static fromDict(data: {[key: string]: any}): SendMobileNotificationByUserIdRequest {
        return new SendMobileNotificationByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSubject(data["subject"])
            .withPayload(data["payload"])
            .withSound(data["sound"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "subject": this.getSubject(),
            "payload": this.getPayload(),
            "sound": this.getSound(),
        };
    }
}