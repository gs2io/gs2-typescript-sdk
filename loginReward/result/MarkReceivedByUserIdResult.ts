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

import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model'

export default class MarkReceivedByUserIdResult implements IResult {
    private item: Gs2LoginReward.ReceiveStatus|null = null;
    private bonusModel: Gs2LoginReward.BonusModel|null = null;

    public getItem(): Gs2LoginReward.ReceiveStatus|null {
        return this.item;
    }

    public setItem(item: Gs2LoginReward.ReceiveStatus|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2LoginReward.ReceiveStatus|null): this {
        this.item = item;
        return this;
    }

    public getBonusModel(): Gs2LoginReward.BonusModel|null {
        return this.bonusModel;
    }

    public setBonusModel(bonusModel: Gs2LoginReward.BonusModel|null) {
        this.bonusModel = bonusModel;
        return this;
    }

    public withBonusModel(bonusModel: Gs2LoginReward.BonusModel|null): this {
        this.bonusModel = bonusModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MarkReceivedByUserIdResult {
        return new MarkReceivedByUserIdResult()
            .withItem(Gs2LoginReward.ReceiveStatus.fromDict(data["item"]))
            .withBonusModel(Gs2LoginReward.BonusModel.fromDict(data["bonusModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "bonusModel": this.getBonusModel()?.toDict(),
        };
    }
}
