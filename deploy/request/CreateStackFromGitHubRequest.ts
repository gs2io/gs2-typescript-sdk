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

export default class CreateStackFromGitHubRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private checkoutSetting: Gs2Deploy.GitHubCheckoutSetting|null = null;

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
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getCheckoutSetting(): Gs2Deploy.GitHubCheckoutSetting|null {
        return this.checkoutSetting;
    }
    public setCheckoutSetting(checkoutSetting: Gs2Deploy.GitHubCheckoutSetting|null) {
        this.checkoutSetting = checkoutSetting;
        return this;
    }
    public withCheckoutSetting(checkoutSetting: Gs2Deploy.GitHubCheckoutSetting|null): this {
        this.checkoutSetting = checkoutSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateStackFromGitHubRequest {
        return new CreateStackFromGitHubRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withCheckoutSetting(Gs2Deploy.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "checkoutSetting": this.getCheckoutSetting()?.toDict(),
        };
    }
}