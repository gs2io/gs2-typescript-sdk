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

import * as Gs2StateMachine from '../../stateMachine/model'

export default class RandomUsed implements IModel {
    private category: number|null = null;
    private used: number|null = null;
    public getCategory(): number|null {
        return this.category;
    }
    public setCategory(category: number|null) {
        this.category = category;
        return this;
    }
    public withCategory(category: number|null): this {
        this.category = category;
        return this;
    }
    public getUsed(): number|null {
        return this.used;
    }
    public setUsed(used: number|null) {
        this.used = used;
        return this;
    }
    public withUsed(used: number|null): this {
        this.used = used;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RandomUsed|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomUsed()
            .withCategory(data["category"])
            .withUsed(data["used"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "category": this.getCategory(),
            "used": this.getUsed(),
        };
    }
}
