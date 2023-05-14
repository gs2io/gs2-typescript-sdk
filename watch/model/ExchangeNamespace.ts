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
import ExchangeRate from './ExchangeRate';

export default class ExchangeNamespace implements IModel {
    private namespaceName: string|null = null;
    private rate: ExchangeRate[]|null = null;
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getRate(): ExchangeRate[]|null {
        return this.rate;
    }
    public setRate(rate: ExchangeRate[]|null) {
        this.rate = rate;
        return this;
    }
    public withRate(rate: ExchangeRate[]|null): this {
        this.rate = rate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespace()
            .withNamespaceName(data["namespaceName"])
            .withRate(data.rate ?
                data.rate.map((item: {[key: string]: any}) => {
                    return ExchangeRate.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "rate": this.getRate() ?
                this.getRate()!.map((item: ExchangeRate) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
