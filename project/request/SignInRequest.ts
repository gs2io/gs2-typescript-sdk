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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Project from '../model'

export default class SignInRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private email: string|null = null;
    private password: string|null = null;

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

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getEmail(): string|null {
        return this.email;
    }

    public setEmail(email: string|null) {
        this.email = email;
        return this;
    }

    public withEmail(email: string|null): this {
        this.email = email;
        return this;
    }

    public getPassword(): string|null {
        return this.password;
    }

    public setPassword(password: string|null) {
        this.password = password;
        return this;
    }

    public withPassword(password: string|null): this {
        this.password = password;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SignInRequest {
        return new SignInRequest()
            .withEmail(data["email"])
            .withPassword(data["password"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "email": this.getEmail(),
            "password": this.getPassword(),
        };
    }
}