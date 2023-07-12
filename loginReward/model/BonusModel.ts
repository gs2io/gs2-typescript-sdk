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
import AcquireAction from './AcquireAction';
import Reward from './Reward';
import ConsumeAction from './ConsumeAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:loginReward:{namespaceName}:bonusModel:{bonusModelName}";

export default class BonusModel implements IModel {
    private bonusModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private mode: string|null = null;
    private periodEventId: string|null = null;
    private resetHour: number|null = null;
    private repeat: string|null = null;
    private rewards: Reward[]|null = null;
    private missedReceiveRelief: string|null = null;
    private missedReceiveReliefConsumeActions: ConsumeAction[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{bonusModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{bonusModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{bonusModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getBonusModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{bonusModelName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getBonusModelName(grn) == null || this.getBonusModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        bonusModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{bonusModelName}', bonusModelName ?? '');
    }
    public getBonusModelId(): string|null {
        return this.bonusModelId;
    }
    public setBonusModelId(bonusModelId: string|null) {
        this.bonusModelId = bonusModelId;
        return this;
    }
    public withBonusModelId(bonusModelId: string|null): this {
        this.bonusModelId = bonusModelId;
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
    public getRewards(): Reward[]|null {
        return this.rewards;
    }
    public setRewards(rewards: Reward[]|null) {
        this.rewards = rewards;
        return this;
    }
    public withRewards(rewards: Reward[]|null): this {
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
    public getMissedReceiveReliefConsumeActions(): ConsumeAction[]|null {
        return this.missedReceiveReliefConsumeActions;
    }
    public setMissedReceiveReliefConsumeActions(missedReceiveReliefConsumeActions: ConsumeAction[]|null) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    }
    public withMissedReceiveReliefConsumeActions(missedReceiveReliefConsumeActions: ConsumeAction[]|null): this {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BonusModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BonusModel()
            .withBonusModelId(data["bonusModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withPeriodEventId(data["periodEventId"])
            .withResetHour(data["resetHour"])
            .withRepeat(data["repeat"])
            .withRewards(data.rewards ?
                data.rewards.map((item: {[key: string]: any}) => {
                    return Reward.fromDict(item);
                }
            ) : [])
            .withMissedReceiveRelief(data["missedReceiveRelief"])
            .withMissedReceiveReliefConsumeActions(data.missedReceiveReliefConsumeActions ?
                data.missedReceiveReliefConsumeActions.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "bonusModelId": this.getBonusModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "periodEventId": this.getPeriodEventId(),
            "resetHour": this.getResetHour(),
            "repeat": this.getRepeat(),
            "rewards": this.getRewards() ?
                this.getRewards()!.map((item: Reward) => {
                    return item.toDict();
                }
            ) : [],
            "missedReceiveRelief": this.getMissedReceiveRelief(),
            "missedReceiveReliefConsumeActions": this.getMissedReceiveReliefConsumeActions() ?
                this.getMissedReceiveReliefConsumeActions()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
