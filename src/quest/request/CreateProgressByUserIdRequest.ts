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

import * as Gs2Quest from '../model'

export class CreateProgressByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private questModelId: string|null = null;
    private force: boolean|null = null;
    private config: Gs2Quest.Config[]|null = null;

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

    public getQuestModelId(): string|null {
        return this.questModelId;
    }

    public setQuestModelId(questModelId: string|null) {
        this.questModelId = questModelId;
        return this;
    }

    public withQuestModelId(questModelId: string|null): this {
        this.questModelId = questModelId;
        return this;
    }

    public getForce(): boolean|null {
        return this.force;
    }

    public setForce(force: boolean|null) {
        this.force = force;
        return this;
    }

    public withForce(force: boolean|null): this {
        this.force = force;
        return this;
    }

    public getConfig(): Gs2Quest.Config[]|null {
        return this.config;
    }

    public setConfig(config: Gs2Quest.Config[]|null) {
        this.config = config;
        return this;
    }

    public withConfig(config: Gs2Quest.Config[]|null): this {
        this.config = config;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateProgressByUserIdRequest {
        return new CreateProgressByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withQuestModelId(data["questModelId"])
            .withForce(data["force"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Quest.Config.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "questModelId": this.getQuestModelId(),
            "force": this.getForce(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Quest.Config) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}