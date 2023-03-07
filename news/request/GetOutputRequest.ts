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

import * as Gs2News from '../model'

export default class GetOutputRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private uploadToken: string|null = null;
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
    public getUploadToken(): string|null {
        return this.uploadToken;
    }
    public setUploadToken(uploadToken: string|null) {
        this.uploadToken = uploadToken;
        return this;
    }
    public withUploadToken(uploadToken: string|null): this {
        this.uploadToken = uploadToken;
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
            .withNamespaceName(data["namespaceName"])
            .withUploadToken(data["uploadToken"])
            .withOutputName(data["outputName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "uploadToken": this.getUploadToken(),
            "outputName": this.getOutputName(),
        };
    }
}