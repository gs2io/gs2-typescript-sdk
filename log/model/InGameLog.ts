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

import * as Gs2Log from '../../log/model'
import InGameLogTag from './InGameLogTag';
const grnFormat: string = "";

export default class InGameLog implements IModel {
    private timestamp: number|null = null;
    private requestId: string|null = null;
    private userId: string|null = null;
    private tags: Gs2Log.InGameLogTag[]|null = null;
    private payload: string|null = null;

    public static isValid(grn: string): boolean {
        return true;
    }

    public static createGrn(
    ): string|null {
        return grnFormat;
    }
    public getTimestamp(): number|null {
        return this.timestamp;
    }
    public setTimestamp(timestamp: number|null) {
        this.timestamp = timestamp;
        return this;
    }
    public withTimestamp(timestamp: number|null): this {
        this.timestamp = timestamp;
        return this;
    }
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
    public getTags(): Gs2Log.InGameLogTag[]|null {
        return this.tags;
    }
    public setTags(tags: Gs2Log.InGameLogTag[]|null) {
        this.tags = tags;
        return this;
    }
    public withTags(tags: Gs2Log.InGameLogTag[]|null): this {
        this.tags = tags;
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

    public static fromDict(data: {[key: string]: any}): InGameLog|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InGameLog()
            .withTimestamp(data["timestamp"])
            .withRequestId(data["requestId"])
            .withUserId(data["userId"])
            .withTags(data.tags ?
                data.tags.map((item: {[key: string]: any}) => {
                    return Gs2Log.InGameLogTag.fromDict(item);
                }
            ) : null)
            .withPayload(data["payload"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "timestamp": this.getTimestamp(),
            "requestId": this.getRequestId(),
            "userId": this.getUserId(),
            "tags": this.getTags() ?
                this.getTags()!.map((item: Gs2Log.InGameLogTag) => {
                    return item.toDict();
                }
            ) : null,
            "payload": this.getPayload(),
        };
    }
}
