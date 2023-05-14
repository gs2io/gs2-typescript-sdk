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

export default class MoneyStatistics implements IModel {
    private arpu: number|null = null;
    private arppu: number|null = null;
    private payingRate: number|null = null;
    public getArpu(): number|null {
        return this.arpu;
    }
    public setArpu(arpu: number|null) {
        this.arpu = arpu;
        return this;
    }
    public withArpu(arpu: number|null): this {
        this.arpu = arpu;
        return this;
    }
    public getArppu(): number|null {
        return this.arppu;
    }
    public setArppu(arppu: number|null) {
        this.arppu = arppu;
        return this;
    }
    public withArppu(arppu: number|null): this {
        this.arppu = arppu;
        return this;
    }
    public getPayingRate(): number|null {
        return this.payingRate;
    }
    public setPayingRate(payingRate: number|null) {
        this.payingRate = payingRate;
        return this;
    }
    public withPayingRate(payingRate: number|null): this {
        this.payingRate = payingRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyStatistics()
            .withArpu(data["arpu"])
            .withArppu(data["arppu"])
            .withPayingRate(data["payingRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "arpu": this.getArpu(),
            "arppu": this.getArppu(),
            "payingRate": this.getPayingRate(),
        };
    }
}
