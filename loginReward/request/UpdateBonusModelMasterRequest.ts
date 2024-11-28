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

import * as Gs2LoginReward from '../model'

export default class UpdateBonusModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private bonusModelName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private mode: string|null = null;
    private periodEventId: string|null = null;
    private resetHour: number|null = null;
    private repeat: string|null = null;
    private rewards: Gs2LoginReward.Reward[]|null = null;
    private missedReceiveRelief: string|null = null;
    private missedReceiveReliefVerifyActions: Gs2LoginReward.VerifyAction[]|null = null;
    private missedReceiveReliefConsumeActions: Gs2LoginReward.ConsumeAction[]|null = null;

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
    public getBonusModelName(): string|null {
        return this.bonusModelName;
    }
    public setBonusModelName(bonusModelName: string|null) {
        this.bonusModelName = bonusModelName;
        return this;
    }
    public withBonusModelName(bonusModelName: string|null): this {
        this.bonusModelName = bonusModelName;
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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getMode(): string|null {
        return this.mode;
    }
    public setMode(mode: string|null) {
        this.mode = mode;
        return this;
    }
    public withMode(mode: string|null): this {
        this.mode = mode;
        return this;
    }
    public getPeriodEventId(): string|null {
        return this.periodEventId;
    }
    public setPeriodEventId(periodEventId: string|null) {
        this.periodEventId = periodEventId;
        return this;
    }
    public withPeriodEventId(periodEventId: string|null): this {
        this.periodEventId = periodEventId;
        return this;
    }
    public getResetHour(): number|null {
        return this.resetHour;
    }
    public setResetHour(resetHour: number|null) {
        this.resetHour = resetHour;
        return this;
    }
    public withResetHour(resetHour: number|null): this {
        this.resetHour = resetHour;
        return this;
    }
    public getRepeat(): string|null {
        return this.repeat;
    }
    public setRepeat(repeat: string|null) {
        this.repeat = repeat;
        return this;
    }
    public withRepeat(repeat: string|null): this {
        this.repeat = repeat;
        return this;
    }
    public getRewards(): Gs2LoginReward.Reward[]|null {
        return this.rewards;
    }
    public setRewards(rewards: Gs2LoginReward.Reward[]|null) {
        this.rewards = rewards;
        return this;
    }
    public withRewards(rewards: Gs2LoginReward.Reward[]|null): this {
        this.rewards = rewards;
        return this;
    }
    public getMissedReceiveRelief(): string|null {
        return this.missedReceiveRelief;
    }
    public setMissedReceiveRelief(missedReceiveRelief: string|null) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    }
    public withMissedReceiveRelief(missedReceiveRelief: string|null): this {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    }
    public getMissedReceiveReliefVerifyActions(): Gs2LoginReward.VerifyAction[]|null {
        return this.missedReceiveReliefVerifyActions;
    }
    public setMissedReceiveReliefVerifyActions(missedReceiveReliefVerifyActions: Gs2LoginReward.VerifyAction[]|null) {
        this.missedReceiveReliefVerifyActions = missedReceiveReliefVerifyActions;
        return this;
    }
    public withMissedReceiveReliefVerifyActions(missedReceiveReliefVerifyActions: Gs2LoginReward.VerifyAction[]|null): this {
        this.missedReceiveReliefVerifyActions = missedReceiveReliefVerifyActions;
        return this;
    }
    public getMissedReceiveReliefConsumeActions(): Gs2LoginReward.ConsumeAction[]|null {
        return this.missedReceiveReliefConsumeActions;
    }
    public setMissedReceiveReliefConsumeActions(missedReceiveReliefConsumeActions: Gs2LoginReward.ConsumeAction[]|null) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    }
    public withMissedReceiveReliefConsumeActions(missedReceiveReliefConsumeActions: Gs2LoginReward.ConsumeAction[]|null): this {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateBonusModelMasterRequest {
        return new UpdateBonusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withPeriodEventId(data["periodEventId"])
            .withResetHour(data["resetHour"])
            .withRepeat(data["repeat"])
            .withRewards(data.rewards ?
                data.rewards.map((item: {[key: string]: any}) => {
                    return Gs2LoginReward.Reward.fromDict(item);
                }
            ) : null)
            .withMissedReceiveRelief(data["missedReceiveRelief"])
            .withMissedReceiveReliefVerifyActions(data.missedReceiveReliefVerifyActions ?
                data.missedReceiveReliefVerifyActions.map((item: {[key: string]: any}) => {
                    return Gs2LoginReward.VerifyAction.fromDict(item);
                }
            ) : null)
            .withMissedReceiveReliefConsumeActions(data.missedReceiveReliefConsumeActions ?
                data.missedReceiveReliefConsumeActions.map((item: {[key: string]: any}) => {
                    return Gs2LoginReward.ConsumeAction.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "periodEventId": this.getPeriodEventId(),
            "resetHour": this.getResetHour(),
            "repeat": this.getRepeat(),
            "rewards": this.getRewards() ?
                this.getRewards()!.map((item: Gs2LoginReward.Reward) => {
                    return item.toDict();
                }
            ) : null,
            "missedReceiveRelief": this.getMissedReceiveRelief(),
            "missedReceiveReliefVerifyActions": this.getMissedReceiveReliefVerifyActions() ?
                this.getMissedReceiveReliefVerifyActions()!.map((item: Gs2LoginReward.VerifyAction) => {
                    return item.toDict();
                }
            ) : null,
            "missedReceiveReliefConsumeActions": this.getMissedReceiveReliefConsumeActions() ?
                this.getMissedReceiveReliefConsumeActions()!.map((item: Gs2LoginReward.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}