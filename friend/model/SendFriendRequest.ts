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

import * as Gs2Friend from '../../friend/model'
const grnFormat: string = "";

export default class SendFriendRequest implements IModel {
    private userId: string|null = null;
    private targetUserId: string|null = null;

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
    public getTargetUserId(): string|null {
        return this.targetUserId;
    }
    public setTargetUserId(targetUserId: string|null) {
        this.targetUserId = targetUserId;
        return this;
    }
    public withTargetUserId(targetUserId: string|null): this {
        this.targetUserId = targetUserId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SendFriendRequest|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendFriendRequest()
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    }
}
