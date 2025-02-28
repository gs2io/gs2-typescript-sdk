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

import * as Gs2Money2 from '../../money2/model'

export default class GooglePlayRealtimeNotificationMessage implements IModel {
    private data: string|null = null;
    private messageId: string|null = null;
    private publishTime: string|null = null;
    public getData(): string|null {
        return this.data;
    }
    public setData(data: string|null) {
        this.data = data;
        return this;
    }
    public withData(data: string|null): this {
        this.data = data;
        return this;
    }
    public getMessageId(): string|null {
        return this.messageId;
    }
    public setMessageId(messageId: string|null) {
        this.messageId = messageId;
        return this;
    }
    public withMessageId(messageId: string|null): this {
        this.messageId = messageId;
        return this;
    }
    public getPublishTime(): string|null {
        return this.publishTime;
    }
    public setPublishTime(publishTime: string|null) {
        this.publishTime = publishTime;
        return this;
    }
    public withPublishTime(publishTime: string|null): this {
        this.publishTime = publishTime;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GooglePlayRealtimeNotificationMessage|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlayRealtimeNotificationMessage()
            .withData(data["data"])
            .withMessageId(data["messageId"])
            .withPublishTime(data["publishTime"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "data": this.getData(),
            "messageId": this.getMessageId(),
            "publishTime": this.getPublishTime(),
        };
    }
}
