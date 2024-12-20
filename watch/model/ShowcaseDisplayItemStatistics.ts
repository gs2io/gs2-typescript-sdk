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

export default class ShowcaseDisplayItemStatistics implements IModel {
    private buy: number|null = null;
    public getBuy(): number|null {
        return this.buy;
    }
    public setBuy(buy: number|null) {
        this.buy = buy;
        return this;
    }
    public withBuy(buy: number|null): this {
        this.buy = buy;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseDisplayItemStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItemStatistics()
            .withBuy(data["buy"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "buy": this.getBuy(),
        };
    }
}
