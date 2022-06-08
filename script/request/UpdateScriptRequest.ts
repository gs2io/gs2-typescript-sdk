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

export default class UpdateScriptRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private scriptName: string|null = null;
    private description: string|null = null;
    private script: string|null = null;

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
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getScriptName(): string|null {
        return this.scriptName;
    }
    public setScriptName(scriptName: string|null) {
        this.scriptName = scriptName;
        return this;
    }
    public withScriptName(scriptName: string|null): this {
        this.scriptName = scriptName;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
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

    public static fromDict(data: {[key: string]: any}): UpdateScriptRequest {
        return new UpdateScriptRequest()
            .withNamespaceName(data["namespaceName"])
            .withScriptName(data["scriptName"])
            .withDescription(data["description"])
            .withScript(data["script"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "scriptName": this.getScriptName(),
            "description": this.getDescription(),
            "script": this.getScript(),
        };
    }
}