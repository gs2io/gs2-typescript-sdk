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
import MoneyStatistics from './MoneyStatistics';
import MoneyBalanceDistribution from './MoneyBalanceDistribution';
import MoneyBillingDistribution from './MoneyBillingDistribution';
import MoneyNamespace from './MoneyNamespace';

export default class MoneyMetrics implements IModel {
    private namespaces: MoneyNamespace[]|null = null;
    public getNamespaces(): MoneyNamespace[]|null {
        return this.namespaces;
    }
    public setNamespaces(namespaces: MoneyNamespace[]|null) {
        this.namespaces = namespaces;
        return this;
    }
    public withNamespaces(namespaces: MoneyNamespace[]|null): this {
        this.namespaces = namespaces;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyMetrics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyMetrics()
            .withNamespaces(data.namespaces ?
                data.namespaces.map((item: {[key: string]: any}) => {
                    return MoneyNamespace.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces()!.map((item: MoneyNamespace) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
