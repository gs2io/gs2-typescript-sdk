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

import IModel from '../../core/interface/IModel';

import * as Gs2Gateway from '../../gateway/model'

export default class SendNotificationEntry implements IModel {
    private userId: string|null = null;
    private issuer: string|null = null;
    private subject: string|null = null;
    private payload: string|null = null;
    private enableTransferMobileNotification: boolean|null = null;
    private sound: string|null = null;
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
    public getIssuer(): string|null {
        return this.issuer;
    }
    public setIssuer(issuer: string|null) {
        this.issuer = issuer;
        return this;
    }
    public withIssuer(issuer: string|null): this {
        this.issuer = issuer;
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
    public getEnableTransferMobileNotification(): boolean|null {
        return this.enableTransferMobileNotification;
    }
    public setEnableTransferMobileNotification(enableTransferMobileNotification: boolean|null) {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        return this;
    }
    public withEnableTransferMobileNotification(enableTransferMobileNotification: boolean|null): this {
        this.enableTransferMobileNotification = enableTransferMobileNotification;
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

    public static fromDict(data: {[key: string]: any}): SendNotificationEntry|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendNotificationEntry()
            .withUserId(data["userId"])
            .withIssuer(data["issuer"])
            .withSubject(data["subject"])
            .withPayload(data["payload"])
            .withEnableTransferMobileNotification(data["enableTransferMobileNotification"])
            .withSound(data["sound"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "issuer": this.getIssuer(),
            "subject": this.getSubject(),
            "payload": this.getPayload(),
            "enableTransferMobileNotification": this.getEnableTransferMobileNotification(),
            "sound": this.getSound(),
        };
    }
}
