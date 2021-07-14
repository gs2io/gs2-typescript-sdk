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

import IModel from '@/gs2/core/interface/IModel';

export class DistributeResource implements IModel {
    private action: string|null = null;
    private request: string|null = null;

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

    public static fromDict(data: {[key: string]: any}): DistributeResource|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DistributeResource()
            .withAction(data["action"])
            .withRequest(data["request"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "action": this.getAction(),
            "request": this.getRequest(),
        };
    }
}
