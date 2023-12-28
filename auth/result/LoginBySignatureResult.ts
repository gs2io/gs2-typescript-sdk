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

import IResult from '../../core/interface/IResult';

export default class LoginBySignatureResult implements IResult {
    private token: string|null = null;
    private userId: string|null = null;
    private expire: number|null = null;

    public getToken(): string|null {
        return this.token;
    }

    public setToken(token: string|null) {
        this.token = token;
        return this;
    }

    public withToken(token: string|null): this {
        this.token = token;
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

    public getExpire(): number|null {
        return this.expire;
    }

    public setExpire(expire: number|null) {
        this.expire = expire;
        return this;
    }

    public withExpire(expire: number|null): this {
        this.expire = expire;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LoginBySignatureResult {
        return new LoginBySignatureResult()
            .withToken(data["token"])
            .withUserId(data["userId"])
            .withExpire(data["expire"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "token": this.getToken(),
            "userId": this.getUserId(),
            "expire": this.getExpire(),
        };
    }
}
