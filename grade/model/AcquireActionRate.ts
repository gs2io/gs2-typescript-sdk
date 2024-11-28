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

import * as Gs2Grade from '../../grade/model'

export default class AcquireActionRate implements IModel {
    private name: string|null = null;
    private mode: string|null = null;
    private rates: number[]|null = null;
    private bigRates: string[]|null = null;
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
    public getRates(): number[]|null {
        return this.rates;
    }
    public setRates(rates: number[]|null) {
        this.rates = rates;
        return this;
    }
    public withRates(rates: number[]|null): this {
        this.rates = rates;
        return this;
    }
    public getBigRates(): string[]|null {
        return this.bigRates;
    }
    public setBigRates(bigRates: string[]|null) {
        this.bigRates = bigRates;
        return this;
    }
    public withBigRates(bigRates: string[]|null): this {
        this.bigRates = bigRates;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireActionRate|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionRate()
            .withName(data["name"])
            .withMode(data["mode"])
            .withRates(data.rates ?
                data.rates.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withBigRates(data.bigRates ?
                data.bigRates.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "mode": this.getMode(),
            "rates": this.getRates() ?
                this.getRates()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "bigRates": this.getBigRates() ?
                this.getBigRates()!.map((item: string) => {
                    return item;
                }
            ) : null,
        };
    }
}
