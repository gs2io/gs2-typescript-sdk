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

export default class RunVerifyTaskResult implements IResult {
    private contextStack: string|null = null;
    private statusCode: number|null = null;
    private result: string|null = null;

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

    public getResult(): string|null {
        return this.result;
    }

    public setResult(result: string|null) {
        this.result = result;
        return this;
    }

    public withResult(result: string|null): this {
        this.result = result;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RunVerifyTaskResult {
        return new RunVerifyTaskResult()
            .withContextStack(data["contextStack"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "contextStack": this.getContextStack(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
        };
    }
}
