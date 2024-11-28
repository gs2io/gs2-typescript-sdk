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

export default class AcquireActionResult implements IModel {
    private action: string|null = null;
    private acquireRequest: string|null = null;
    private statusCode: number|null = null;
    private acquireResult: string|null = null;
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
    public getAcquireRequest(): string|null {
        return this.acquireRequest;
    }
    public setAcquireRequest(acquireRequest: string|null) {
        this.acquireRequest = acquireRequest;
        return this;
    }
    public withAcquireRequest(acquireRequest: string|null): this {
        this.acquireRequest = acquireRequest;
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
    public getAcquireResult(): string|null {
        return this.acquireResult;
    }
    public setAcquireResult(acquireResult: string|null) {
        this.acquireResult = acquireResult;
        return this;
    }
    public withAcquireResult(acquireResult: string|null): this {
        this.acquireResult = acquireResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireActionResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionResult()
            .withAction(data["action"])
            .withAcquireRequest(data["acquireRequest"])
            .withStatusCode(data["statusCode"])
            .withAcquireResult(data["acquireResult"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "action": this.getAction(),
            "acquireRequest": this.getAcquireRequest(),
            "statusCode": this.getStatusCode(),
            "acquireResult": this.getAcquireResult(),
        };
    }
}
