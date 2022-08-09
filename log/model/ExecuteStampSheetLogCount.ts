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

export default class ExecuteStampSheetLogCount implements IModel {
    private service: string|null = null;
    private method: string|null = null;
    private userId: string|null = null;
    private action: string|null = null;
    private count: number|null = null;
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
    public getAction(): string|null {
        return this.action;
    }
    public setAction(action: string|null) {
        this.action = action;
        return this;
    }
    public withAction(action: string|null): this {
        this.action = action;
        return this;
    }
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExecuteStampSheetLogCount|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExecuteStampSheetLogCount()
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withCount(data["count"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "count": this.getCount(),
        };
    }
}
