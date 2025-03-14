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

import * as Gs2Enhance from '../../enhance/model'

export default class BonusRate implements IModel {
    private rate: number|null = null;
    private weight: number|null = null;
    public getRate(): number|null {
        return this.rate;
    }
    public setRate(rate: number|null) {
        this.rate = rate;
        return this;
    }
    public withRate(rate: number|null): this {
        this.rate = rate;
        return this;
    }
    public getWeight(): number|null {
        return this.weight;
    }
    public setWeight(weight: number|null) {
        this.weight = weight;
        return this;
    }
    public withWeight(weight: number|null): this {
        this.weight = weight;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BonusRate|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BonusRate()
            .withRate(data["rate"])
            .withWeight(data["weight"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rate": this.getRate(),
            "weight": this.getWeight(),
        };
    }
}
