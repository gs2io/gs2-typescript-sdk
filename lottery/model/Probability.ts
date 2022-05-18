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
import DrawnPrize from './DrawnPrize';

export default class Probability implements IModel {
    private prize: DrawnPrize|null = null;
    private rate: number|null = null;

    public getPrize(): DrawnPrize|null {
        return this.prize;
    }

    public setPrize(prize: DrawnPrize|null) {
        this.prize = prize;
        return this;
    }

    public withPrize(prize: DrawnPrize|null): this {
        this.prize = prize;
        return this;
    }

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

    public static fromDict(data: {[key: string]: any}): Probability|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Probability()
            .withPrize(DrawnPrize.fromDict(data["prize"]))
            .withRate(data["rate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "prize": this.getPrize()?.toDict(),
            "rate": this.getRate(),
        };
    }
}
