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

export default class ExchangeRateModelStatistics implements IModel {
    private exchange: number|null = null;
    private amount: number|null = null;
    public getExchange(): number|null {
        return this.exchange;
    }
    public setExchange(exchange: number|null) {
        this.exchange = exchange;
        return this;
    }
    public withExchange(exchange: number|null): this {
        this.exchange = exchange;
        return this;
    }
    public getAmount(): number|null {
        return this.amount;
    }
    public setAmount(amount: number|null) {
        this.amount = amount;
        return this;
    }
    public withAmount(amount: number|null): this {
        this.amount = amount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeRateModelStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeRateModelStatistics()
            .withExchange(data["exchange"])
            .withAmount(data["amount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "exchange": this.getExchange(),
            "amount": this.getAmount(),
        };
    }
}
