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

import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model'

export default class DescribeMoneyNamespaceMetricsResult implements IResult {
    private items: Gs2Watch.MoneyNamespace[]|null = null;

    public getItems(): Gs2Watch.MoneyNamespace[]|null {
        return this.items;
    }

    public setItems(items: Gs2Watch.MoneyNamespace[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Watch.MoneyNamespace[]|null): this {
        this.items = items;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DescribeMoneyNamespaceMetricsResult {
        return new DescribeMoneyNamespaceMetricsResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Watch.MoneyNamespace.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Watch.MoneyNamespace) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
