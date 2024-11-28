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

import IModel from './interface/IModel';

export default class VerifyActionResult implements IModel {
    private action: string|null = null;
    private verifyRequest: string|null = null;
    private statusCode: number|null = null;
    private verifyResult: string|null = null;
    public getAction(): string|null {
        return this.action;
    }
    public setAction(action: string|null) {
        this.action = action;
        return this;
    }
    public withAction(action: string|null): this {
        this.action = action;
        return this;
    }
    public getVerifyRequest(): string|null {
        return this.verifyRequest;
    }
    public setVerifyRequest(verifyRequest: string|null) {
        this.verifyRequest = verifyRequest;
        return this;
    }
    public withVerifyRequest(verifyRequest: string|null): this {
        this.verifyRequest = verifyRequest;
        return this;
    }
    public getStatusCode(): number|null {
        return this.statusCode;
    }
    public setStatusCode(statusCode: number|null) {
        this.statusCode = statusCode;
        return this;
    }
    public withStatusCode(statusCode: number|null): this {
        this.statusCode = statusCode;
        return this;
    }
    public getVerifyResult(): string|null {
        return this.verifyResult;
    }
    public setVerifyResult(verifyResult: string|null) {
        this.verifyResult = verifyResult;
        return this;
    }
    public withVerifyResult(verifyResult: string|null): this {
        this.verifyResult = verifyResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): VerifyActionResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new VerifyActionResult()
            .withAction(data["action"])
            .withVerifyRequest(data["verifyRequest"])
            .withStatusCode(data["statusCode"])
            .withVerifyResult(data["verifyResult"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "action": this.getAction(),
            "verifyRequest": this.getVerifyRequest(),
            "statusCode": this.getStatusCode(),
            "verifyResult": this.getVerifyResult(),
        };
    }
}
