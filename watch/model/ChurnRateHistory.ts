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

export default class ChurnRateHistory implements IModel {
    private date: string|null = null;
    private churnRate: number|null = null;
    public getDate(): string|null {
        return this.date;
    }
    public setDate(date: string|null) {
        this.date = date;
        return this;
    }
    public withDate(date: string|null): this {
        this.date = date;
        return this;
    }
    public getChurnRate(): number|null {
        return this.churnRate;
    }
    public setChurnRate(churnRate: number|null) {
        this.churnRate = churnRate;
        return this;
    }
    public withChurnRate(churnRate: number|null): this {
        this.churnRate = churnRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChurnRateHistory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChurnRateHistory()
            .withDate(data["date"])
            .withChurnRate(data["churnRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "date": this.getDate(),
            "churnRate": this.getChurnRate(),
        };
    }
}
