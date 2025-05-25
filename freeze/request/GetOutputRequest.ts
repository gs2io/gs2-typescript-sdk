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

import * as Gs2Freeze from '../model'

export default class GetOutputRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private stageName: string|null = null;
    private outputName: string|null = null;

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
    public getStageName(): string|null {
        return this.stageName;
    }
    public setStageName(stageName: string|null) {
        this.stageName = stageName;
        return this;
    }
    public withStageName(stageName: string|null): this {
        this.stageName = stageName;
        return this;
    }
    public getOutputName(): string|null {
        return this.outputName;
    }
    public setOutputName(outputName: string|null) {
        this.outputName = outputName;
        return this;
    }
    public withOutputName(outputName: string|null): this {
        this.outputName = outputName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetOutputRequest {
        return new GetOutputRequest()
            .withStageName(data["stageName"])
            .withOutputName(data["outputName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stageName": this.getStageName(),
            "outputName": this.getOutputName(),
        };
    }
}