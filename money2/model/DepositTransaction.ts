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

export default class DepositTransaction implements IModel {
    private price: number|null = null;
    private currency: string|null = null;
    private count: number|null = null;
    private depositedAt: number|null = null;
    public getPrice(): number|null {
        return this.price;
    }
    public setPrice(price: number|null) {
        this.price = price;
        return this;
    }
    public withPrice(price: number|null): this {
        this.price = price;
        return this;
    }
    public getCurrency(): string|null {
        return this.currency;
    }
    public setCurrency(currency: string|null) {
        this.currency = currency;
        return this;
    }
    public withCurrency(currency: string|null): this {
        this.currency = currency;
        return this;
    }
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }
    public getDepositedAt(): number|null {
        return this.depositedAt;
    }
    public setDepositedAt(depositedAt: number|null) {
        this.depositedAt = depositedAt;
        return this;
    }
    public withDepositedAt(depositedAt: number|null): this {
        this.depositedAt = depositedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DepositTransaction|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DepositTransaction()
            .withPrice(data["price"])
            .withCurrency(data["currency"])
            .withCount(data["count"])
            .withDepositedAt(data["depositedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "price": this.getPrice(),
            "currency": this.getCurrency(),
            "count": this.getCount(),
            "depositedAt": this.getDepositedAt(),
        };
    }
}
