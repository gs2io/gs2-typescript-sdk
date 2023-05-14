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
import RankingCategoryScoreDistribution from './RankingCategoryScoreDistribution';
import RankingCategory from './RankingCategory';

export default class RankingNamespace implements IModel {
    private namespaceName: string|null = null;
    private category: RankingCategory[]|null = null;
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
    public getCategory(): RankingCategory[]|null {
        return this.category;
    }
    public setCategory(category: RankingCategory[]|null) {
        this.category = category;
        return this;
    }
    public withCategory(category: RankingCategory[]|null): this {
        this.category = category;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RankingNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingNamespace()
            .withNamespaceName(data["namespaceName"])
            .withCategory(data.category ?
                data.category.map((item: {[key: string]: any}) => {
                    return RankingCategory.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "category": this.getCategory() ?
                this.getCategory()!.map((item: RankingCategory) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
