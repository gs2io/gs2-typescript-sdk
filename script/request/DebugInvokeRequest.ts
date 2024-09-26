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

import * as Gs2Script from '../model'

export default class DebugInvokeRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private script: string|null = null;
    private args: string|null = null;
    private randomStatus: Gs2Script.RandomStatus|null = null;
    private disableStringNumberToNumber: boolean|null = null;

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
    public getScript(): string|null {
        return this.script;
    }
    public setScript(script: string|null) {
        this.script = script;
        return this;
    }
    public withScript(script: string|null): this {
        this.script = script;
        return this;
    }
    public getArgs(): string|null {
        return this.args;
    }
    public setArgs(args: string|null) {
        this.args = args;
        return this;
    }
    public withArgs(args: string|null): this {
        this.args = args;
        return this;
    }
    public getRandomStatus(): Gs2Script.RandomStatus|null {
        return this.randomStatus;
    }
    public setRandomStatus(randomStatus: Gs2Script.RandomStatus|null) {
        this.randomStatus = randomStatus;
        return this;
    }
    public withRandomStatus(randomStatus: Gs2Script.RandomStatus|null): this {
        this.randomStatus = randomStatus;
        return this;
    }
    public getDisableStringNumberToNumber(): boolean|null {
        return this.disableStringNumberToNumber;
    }
    public setDisableStringNumberToNumber(disableStringNumberToNumber: boolean|null) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    }
    public withDisableStringNumberToNumber(disableStringNumberToNumber: boolean|null): this {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DebugInvokeRequest {
        return new DebugInvokeRequest()
            .withScript(data["script"])
            .withArgs(data["args"])
            .withRandomStatus(Gs2Script.RandomStatus.fromDict(data["randomStatus"]))
            .withDisableStringNumberToNumber(data["disableStringNumberToNumber"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "script": this.getScript(),
            "args": this.getArgs(),
            "randomStatus": this.getRandomStatus()?.toDict(),
            "disableStringNumberToNumber": this.getDisableStringNumberToNumber(),
        };
    }
}