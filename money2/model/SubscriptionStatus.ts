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
import SubscribeTransaction from './SubscribeTransaction';
const grnFormat: string = "";

export default class SubscriptionStatus implements IModel {
    private userId: string|null = null;
    private contentName: string|null = null;
    private status: string|null = null;
    private expiresAt: number|null = null;
    private detail: Gs2Money2.SubscribeTransaction[]|null = null;

    public static isValid(grn: string): boolean {
        return true;
    }

    public static createGrn(
    ): string|null {
        return grnFormat;
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
    public getContentName(): string|null {
        return this.contentName;
    }
    public setContentName(contentName: string|null) {
        this.contentName = contentName;
        return this;
    }
    public withContentName(contentName: string|null): this {
        this.contentName = contentName;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
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
    public getDetail(): Gs2Money2.SubscribeTransaction[]|null {
        return this.detail;
    }
    public setDetail(detail: Gs2Money2.SubscribeTransaction[]|null) {
        this.detail = detail;
        return this;
    }
    public withDetail(detail: Gs2Money2.SubscribeTransaction[]|null): this {
        this.detail = detail;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SubscriptionStatus|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscriptionStatus()
            .withUserId(data["userId"])
            .withContentName(data["contentName"])
            .withStatus(data["status"])
            .withExpiresAt(data["expiresAt"])
            .withDetail(data.detail ?
                data.detail.map((item: {[key: string]: any}) => {
                    return Gs2Money2.SubscribeTransaction.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "contentName": this.getContentName(),
            "status": this.getStatus(),
            "expiresAt": this.getExpiresAt(),
            "detail": this.getDetail() ?
                this.getDetail()!.map((item: Gs2Money2.SubscribeTransaction) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
