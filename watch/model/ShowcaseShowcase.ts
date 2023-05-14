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
import ShowcaseDisplayItem from './ShowcaseDisplayItem';

export default class ShowcaseShowcase implements IModel {
    private name: string|null = null;
    private displayItem: ShowcaseDisplayItem[]|null = null;
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
    public getDisplayItem(): ShowcaseDisplayItem[]|null {
        return this.displayItem;
    }
    public setDisplayItem(displayItem: ShowcaseDisplayItem[]|null) {
        this.displayItem = displayItem;
        return this;
    }
    public withDisplayItem(displayItem: ShowcaseDisplayItem[]|null): this {
        this.displayItem = displayItem;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseShowcase|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcase()
            .withName(data["name"])
            .withDisplayItem(data.displayItem ?
                data.displayItem.map((item: {[key: string]: any}) => {
                    return ShowcaseDisplayItem.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "displayItem": this.getDisplayItem() ?
                this.getDisplayItem()!.map((item: ShowcaseDisplayItem) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
