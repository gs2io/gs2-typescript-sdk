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

import * as Gs2Deploy from '../model'

export default class PreChangeSetRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private stackName: string|null = null;

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
    public getStackName(): string|null {
        return this.stackName;
    }
    public setStackName(stackName: string|null) {
        this.stackName = stackName;
        return this;
    }
    public withStackName(stackName: string|null): this {
        this.stackName = stackName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PreChangeSetRequest {
        return new PreChangeSetRequest()
            .withStackName(data["stackName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stackName": this.getStackName(),
        };
    }
}