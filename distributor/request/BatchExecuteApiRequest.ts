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

import * as Gs2Distributor from '../model'

export default class BatchExecuteApiRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private requestPayloads: Gs2Distributor.BatchRequestPayload[]|null = null;

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
    public getRequestPayloads(): Gs2Distributor.BatchRequestPayload[]|null {
        return this.requestPayloads;
    }
    public setRequestPayloads(requestPayloads: Gs2Distributor.BatchRequestPayload[]|null) {
        this.requestPayloads = requestPayloads;
        return this;
    }
    public withRequestPayloads(requestPayloads: Gs2Distributor.BatchRequestPayload[]|null): this {
        this.requestPayloads = requestPayloads;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BatchExecuteApiRequest {
        return new BatchExecuteApiRequest()
            .withRequestPayloads(data.requestPayloads ?
                data.requestPayloads.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.BatchRequestPayload.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "requestPayloads": this.getRequestPayloads() ?
                this.getRequestPayloads()!.map((item: Gs2Distributor.BatchRequestPayload) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}