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

export class InvokeScriptRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private scriptId: string|null = null;
    private args: string|null = null;

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

    public getScriptId(): string|null {
        return this.scriptId;
    }

    public setScriptId(scriptId: string|null) {
        this.scriptId = scriptId;
        return this;
    }

    public withScriptId(scriptId: string|null): this {
        this.scriptId = scriptId;
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

    public static fromDict(data: {[key: string]: any}): InvokeScriptRequest {
        return new InvokeScriptRequest()
            .withScriptId(data["scriptId"])
            .withArgs(data["args"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
        };
    }
}