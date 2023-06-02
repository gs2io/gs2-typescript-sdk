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

export default class LotteryNamespaceStatistics implements IModel {
    private draw: number|null = null;
    private drawAmount: number|null = null;
    public getDraw(): number|null {
        return this.draw;
    }
    public setDraw(draw: number|null) {
        this.draw = draw;
        return this;
    }
    public withDraw(draw: number|null): this {
        this.draw = draw;
        return this;
    }
    public getDrawAmount(): number|null {
        return this.drawAmount;
    }
    public setDrawAmount(drawAmount: number|null) {
        this.drawAmount = drawAmount;
        return this;
    }
    public withDrawAmount(drawAmount: number|null): this {
        this.drawAmount = drawAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LotteryNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceStatistics()
            .withDraw(data["draw"])
            .withDrawAmount(data["drawAmount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "draw": this.getDraw(),
            "drawAmount": this.getDrawAmount(),
        };
    }
}
