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
const grnFormat: string = "";

export default class SendMemberRequest implements IModel {
    private userId: string|null = null;
    private targetGuildName: string|null = null;

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
    public getTargetGuildName(): string|null {
        return this.targetGuildName;
    }
    public setTargetGuildName(targetGuildName: string|null) {
        this.targetGuildName = targetGuildName;
        return this;
    }
    public withTargetGuildName(targetGuildName: string|null): this {
        this.targetGuildName = targetGuildName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SendMemberRequest|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendMemberRequest()
            .withUserId(data["userId"])
            .withTargetGuildName(data["targetGuildName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "targetGuildName": this.getTargetGuildName(),
        };
    }
}
