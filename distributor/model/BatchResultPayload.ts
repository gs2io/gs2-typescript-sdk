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

import * as Gs2Distributor from '../../distributor/model'

export default class BatchResultPayload implements IModel {
    private requestId: string|null = null;
    private statusCode: number|null = null;
    private resultPayload: string|null = null;
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
    public getResultPayload(): string|null {
        return this.resultPayload;
    }
    public setResultPayload(resultPayload: string|null) {
        this.resultPayload = resultPayload;
        return this;
    }
    public withResultPayload(resultPayload: string|null): this {
        this.resultPayload = resultPayload;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BatchResultPayload|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BatchResultPayload()
            .withRequestId(data["requestId"])
            .withStatusCode(data["statusCode"])
            .withResultPayload(data["resultPayload"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "requestId": this.getRequestId(),
            "statusCode": this.getStatusCode(),
            "resultPayload": this.getResultPayload(),
        };
    }
}
