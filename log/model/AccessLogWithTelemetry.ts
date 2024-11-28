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

import * as Gs2Log from '../../log/model'

export default class AccessLogWithTelemetry implements IModel {
    private timestamp: number|null = null;
    private sourceRequestId: string|null = null;
    private requestId: string|null = null;
    private duration: number|null = null;
    private service: string|null = null;
    private method: string|null = null;
    private userId: string|null = null;
    private request: string|null = null;
    private result: string|null = null;
    private status: string|null = null;
    public getTimestamp(): number|null {
        return this.timestamp;
    }
    public setTimestamp(timestamp: number|null) {
        this.timestamp = timestamp;
        return this;
    }
    public withTimestamp(timestamp: number|null): this {
        this.timestamp = timestamp;
        return this;
    }
    public getSourceRequestId(): string|null {
        return this.sourceRequestId;
    }
    public setSourceRequestId(sourceRequestId: string|null) {
        this.sourceRequestId = sourceRequestId;
        return this;
    }
    public withSourceRequestId(sourceRequestId: string|null): this {
        this.sourceRequestId = sourceRequestId;
        return this;
    }
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
    public getDuration(): number|null {
        return this.duration;
    }
    public setDuration(duration: number|null) {
        this.duration = duration;
        return this;
    }
    public withDuration(duration: number|null): this {
        this.duration = duration;
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
    public getMethod(): string|null {
        return this.method;
    }
    public setMethod(method: string|null) {
        this.method = method;
        return this;
    }
    public withMethod(method: string|null): this {
        this.method = method;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getRequest(): string|null {
        return this.request;
    }
    public setRequest(request: string|null) {
        this.request = request;
        return this;
    }
    public withRequest(request: string|null): this {
        this.request = request;
        return this;
    }
    public getResult(): string|null {
        return this.result;
    }
    public setResult(result: string|null) {
        this.result = result;
        return this;
    }
    public withResult(result: string|null): this {
        this.result = result;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AccessLogWithTelemetry|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccessLogWithTelemetry()
            .withTimestamp(data["timestamp"])
            .withSourceRequestId(data["sourceRequestId"])
            .withRequestId(data["requestId"])
            .withDuration(data["duration"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withRequest(data["request"])
            .withResult(data["result"])
            .withStatus(data["status"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "timestamp": this.getTimestamp(),
            "sourceRequestId": this.getSourceRequestId(),
            "requestId": this.getRequestId(),
            "duration": this.getDuration(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "request": this.getRequest(),
            "result": this.getResult(),
            "status": this.getStatus(),
        };
    }
}
