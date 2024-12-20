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

export default class BatchRequestPayload implements IModel {
    private requestId: string|null = null;
    private service: string|null = null;
    private methodName: string|null = null;
    private parameter: string|null = null;
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
    public getService(): string|null {
        return this.service;
    }
    public setService(service: string|null) {
        this.service = service;
        return this;
    }
    public withService(service: string|null): this {
        this.service = service;
        return this;
    }
    public getMethodName(): string|null {
        return this.methodName;
    }
    public setMethodName(methodName: string|null) {
        this.methodName = methodName;
        return this;
    }
    public withMethodName(methodName: string|null): this {
        this.methodName = methodName;
        return this;
    }
    public getParameter(): string|null {
        return this.parameter;
    }
    public setParameter(parameter: string|null) {
        this.parameter = parameter;
        return this;
    }
    public withParameter(parameter: string|null): this {
        this.parameter = parameter;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BatchRequestPayload|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BatchRequestPayload()
            .withRequestId(data["requestId"])
            .withService(data["service"])
            .withMethodName(data["methodName"])
            .withParameter(data["parameter"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "requestId": this.getRequestId(),
            "service": this.getService(),
            "methodName": this.getMethodName(),
            "parameter": this.getParameter(),
        };
    }
}
