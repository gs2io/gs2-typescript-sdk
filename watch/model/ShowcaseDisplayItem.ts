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
import ShowcaseBuyQuantityDistribution from './ShowcaseBuyQuantityDistribution';

export default class ShowcaseDisplayItem implements IModel {
    private displayItemId: string|null = null;
    private quantityDistribution: ShowcaseBuyQuantityDistribution[]|null = null;
    public getDisplayItemId(): string|null {
        return this.displayItemId;
    }
    public setDisplayItemId(displayItemId: string|null) {
        this.displayItemId = displayItemId;
        return this;
    }
    public withDisplayItemId(displayItemId: string|null): this {
        this.displayItemId = displayItemId;
        return this;
    }
    public getQuantityDistribution(): ShowcaseBuyQuantityDistribution[]|null {
        return this.quantityDistribution;
    }
    public setQuantityDistribution(quantityDistribution: ShowcaseBuyQuantityDistribution[]|null) {
        this.quantityDistribution = quantityDistribution;
        return this;
    }
    public withQuantityDistribution(quantityDistribution: ShowcaseBuyQuantityDistribution[]|null): this {
        this.quantityDistribution = quantityDistribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseDisplayItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItem()
            .withDisplayItemId(data["displayItemId"])
            .withQuantityDistribution(data.quantityDistribution ?
                data.quantityDistribution.map((item: {[key: string]: any}) => {
                    return ShowcaseBuyQuantityDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "displayItemId": this.getDisplayItemId(),
            "quantityDistribution": this.getQuantityDistribution() ?
                this.getQuantityDistribution()!.map((item: ShowcaseBuyQuantityDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
