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

import * as Gs2Identifier from '../model'

export default class LoginResult implements IResult {
    private accessToken: string|null = null;
    private tokenType: string|null = null;
    private expiresIn: number|null = null;

    public getAccessToken(): string|null {
        return this.accessToken;
    }

    public setAccessToken(accessToken: string|null) {
        this.accessToken = accessToken;
        return this;
    }

    public withAccessToken(accessToken: string|null): this {
        this.accessToken = accessToken;
        return this;
    }

    public getTokenType(): string|null {
        return this.tokenType;
    }

    public setTokenType(tokenType: string|null) {
        this.tokenType = tokenType;
        return this;
    }

    public withTokenType(tokenType: string|null): this {
        this.tokenType = tokenType;
        return this;
    }

    public getExpiresIn(): number|null {
        return this.expiresIn;
    }

    public setExpiresIn(expiresIn: number|null) {
        this.expiresIn = expiresIn;
        return this;
    }

    public withExpiresIn(expiresIn: number|null): this {
        this.expiresIn = expiresIn;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LoginResult {
        return new LoginResult()
            .withAccessToken(data["accessToken"])
            .withTokenType(data["tokenType"])
            .withExpiresIn(data["expiresIn"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accessToken": this.getAccessToken(),
            "tokenType": this.getTokenType(),
            "expiresIn": this.getExpiresIn(),
        };
    }
}
