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

import * as Gs2Project from '../model'

export default class GetImportErrorLogRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private transactionId: string|null = null;
    private errorLogName: string|null = null;

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
    public getTransactionId(): string|null {
        return this.transactionId;
    }
    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }
    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
        return this;
    }
    public getErrorLogName(): string|null {
        return this.errorLogName;
    }
    public setErrorLogName(errorLogName: string|null) {
        this.errorLogName = errorLogName;
        return this;
    }
    public withErrorLogName(errorLogName: string|null): this {
        this.errorLogName = errorLogName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetImportErrorLogRequest {
        return new GetImportErrorLogRequest()
            .withTransactionId(data["transactionId"])
            .withErrorLogName(data["errorLogName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "transactionId": this.getTransactionId(),
            "errorLogName": this.getErrorLogName(),
        };
    }
}