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

export default class EndByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private rewards: Gs2Quest.Reward[]|null = null;
    private isComplete: boolean|null = null;
    private config: Gs2Quest.Config[]|null = null;
    private timeOffsetToken: string|null = null;
    private duplicationAvoider: string|null = null;

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
    public getRewards(): Gs2Quest.Reward[]|null {
        return this.rewards;
    }
    public setRewards(rewards: Gs2Quest.Reward[]|null) {
        this.rewards = rewards;
        return this;
    }
    public withRewards(rewards: Gs2Quest.Reward[]|null): this {
        this.rewards = rewards;
        return this;
    }
    public getIsComplete(): boolean|null {
        return this.isComplete;
    }
    public setIsComplete(isComplete: boolean|null) {
        this.isComplete = isComplete;
        return this;
    }
    public withIsComplete(isComplete: boolean|null): this {
        this.isComplete = isComplete;
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
    public getTimeOffsetToken(): string|null {
        return this.timeOffsetToken;
    }
    public setTimeOffsetToken(timeOffsetToken: string|null) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    }
    public withTimeOffsetToken(timeOffsetToken: string|null): this {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): EndByUserIdRequest {
        return new EndByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRewards(data.rewards ?
                data.rewards.map((item: {[key: string]: any}) => {
                    return Gs2Quest.Reward.fromDict(item);
                }
            ) : null)
            .withIsComplete(data["isComplete"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Quest.Config.fromDict(item);
                }
            ) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rewards": this.getRewards() ?
                this.getRewards()!.map((item: Gs2Quest.Reward) => {
                    return item.toDict();
                }
            ) : null,
            "isComplete": this.getIsComplete(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Quest.Config) => {
                    return item.toDict();
                }
            ) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    }
}