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

export default class ConsumeActionResult implements IModel {
    private action: string|null = null;
    private consumeRequest: string|null = null;
    private statusCode: number|null = null;
    private consumeResult: string|null = null;
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
    public getConsumeRequest(): string|null {
        return this.consumeRequest;
    }
    public setConsumeRequest(consumeRequest: string|null) {
        this.consumeRequest = consumeRequest;
        return this;
    }
    public withConsumeRequest(consumeRequest: string|null): this {
        this.consumeRequest = consumeRequest;
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
    public getConsumeResult(): string|null {
        return this.consumeResult;
    }
    public setConsumeResult(consumeResult: string|null) {
        this.consumeResult = consumeResult;
        return this;
    }
    public withConsumeResult(consumeResult: string|null): this {
        this.consumeResult = consumeResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ConsumeActionResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ConsumeActionResult()
            .withAction(data["action"])
            .withConsumeRequest(data["consumeRequest"])
            .withStatusCode(data["statusCode"])
            .withConsumeResult(data["consumeResult"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "action": this.getAction(),
            "consumeRequest": this.getConsumeRequest(),
            "statusCode": this.getStatusCode(),
            "consumeResult": this.getConsumeResult(),
        };
    }
}
