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

import * as Gs2Lottery from '../model'

export default class DrawByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private lotteryName: string|null = null;
    private userId: string|null = null;
    private count: number|null = null;
    private config: Gs2Lottery.Config[]|null = null;
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
    public getLotteryName(): string|null {
        return this.lotteryName;
    }
    public setLotteryName(lotteryName: string|null) {
        this.lotteryName = lotteryName;
        return this;
    }
    public withLotteryName(lotteryName: string|null): this {
        this.lotteryName = lotteryName;
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
    public getConfig(): Gs2Lottery.Config[]|null {
        return this.config;
    }
    public setConfig(config: Gs2Lottery.Config[]|null) {
        this.config = config;
        return this;
    }
    public withConfig(config: Gs2Lottery.Config[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): DrawByUserIdRequest {
        return new DrawByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Lottery.Config.fromDict(item);
                }
            ) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Lottery.Config) => {
                    return item.toDict();
                }
            ) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    }
}