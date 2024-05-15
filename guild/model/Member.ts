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

export default class Member implements IModel {
    private userId: string|null = null;
    private roleName: string|null = null;
    private joinedAt: number|null = null;
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
    public getRoleName(): string|null {
        return this.roleName;
    }
    public setRoleName(roleName: string|null) {
        this.roleName = roleName;
        return this;
    }
    public withRoleName(roleName: string|null): this {
        this.roleName = roleName;
        return this;
    }
    public getJoinedAt(): number|null {
        return this.joinedAt;
    }
    public setJoinedAt(joinedAt: number|null) {
        this.joinedAt = joinedAt;
        return this;
    }
    public withJoinedAt(joinedAt: number|null): this {
        this.joinedAt = joinedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Member|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Member()
            .withUserId(data["userId"])
            .withRoleName(data["roleName"])
            .withJoinedAt(data["joinedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "roleName": this.getRoleName(),
            "joinedAt": this.getJoinedAt(),
        };
    }
}
