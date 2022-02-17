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

export default class JobEntry implements IModel {
    private scriptId: string|null = null;
    private args: string|null = null;
    private maxTryCount: number|null = null;

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

    public getMaxTryCount(): number|null {
        return this.maxTryCount;
    }

    public setMaxTryCount(maxTryCount: number|null) {
        this.maxTryCount = maxTryCount;
        return this;
    }

    public withMaxTryCount(maxTryCount: number|null): this {
        this.maxTryCount = maxTryCount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): JobEntry|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new JobEntry()
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withMaxTryCount(data["maxTryCount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "maxTryCount": this.getMaxTryCount(),
        };
    }
}
