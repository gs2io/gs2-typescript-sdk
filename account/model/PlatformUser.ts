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

import * as Gs2Account from '../../account/model'

export default class PlatformUser implements IModel {
    private type: number|null = null;
    private userIdentifier: string|null = null;
    private userId: string|null = null;
    public getType(): number|null {
        return this.type;
    }
    public setType(type: number|null) {
        this.type = type;
        return this;
    }
    public withType(type: number|null): this {
        this.type = type;
        return this;
    }
    public getUserIdentifier(): string|null {
        return this.userIdentifier;
    }
    public setUserIdentifier(userIdentifier: string|null) {
        this.userIdentifier = userIdentifier;
        return this;
    }
    public withUserIdentifier(userIdentifier: string|null): this {
        this.userIdentifier = userIdentifier;
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

    public static fromDict(data: {[key: string]: any}): PlatformUser|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformUser()
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withUserId(data["userId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "userId": this.getUserId(),
        };
    }
}
