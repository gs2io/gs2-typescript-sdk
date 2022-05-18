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

export default class CalculatedAt implements IModel {
    private categoryName: string|null = null;
    private calculatedAt: number|null = null;

    public getCategoryName(): string|null {
        return this.categoryName;
    }

    public setCategoryName(categoryName: string|null) {
        this.categoryName = categoryName;
        return this;
    }

    public withCategoryName(categoryName: string|null): this {
        this.categoryName = categoryName;
        return this;
    }

    public getCalculatedAt(): number|null {
        return this.calculatedAt;
    }

    public setCalculatedAt(calculatedAt: number|null) {
        this.calculatedAt = calculatedAt;
        return this;
    }

    public withCalculatedAt(calculatedAt: number|null): this {
        this.calculatedAt = calculatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CalculatedAt|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CalculatedAt()
            .withCategoryName(data["categoryName"])
            .withCalculatedAt(data["calculatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "categoryName": this.getCategoryName(),
            "calculatedAt": this.getCalculatedAt(),
        };
    }
}
