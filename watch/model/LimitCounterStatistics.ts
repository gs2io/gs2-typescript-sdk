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

import * as Gs2Watch from '../../watch/model'

export default class LimitCounterStatistics implements IModel {
    private increase: number|null = null;
    private increaseAmount: number|null = null;
    public getIncrease(): number|null {
        return this.increase;
    }
    public setIncrease(increase: number|null) {
        this.increase = increase;
        return this;
    }
    public withIncrease(increase: number|null): this {
        this.increase = increase;
        return this;
    }
    public getIncreaseAmount(): number|null {
        return this.increaseAmount;
    }
    public setIncreaseAmount(increaseAmount: number|null) {
        this.increaseAmount = increaseAmount;
        return this;
    }
    public withIncreaseAmount(increaseAmount: number|null): this {
        this.increaseAmount = increaseAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitCounterStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounterStatistics()
            .withIncrease(data["increase"])
            .withIncreaseAmount(data["increaseAmount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "increase": this.getIncrease(),
            "increaseAmount": this.getIncreaseAmount(),
        };
    }
}
