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
import RandomUsed from './RandomUsed';

export default class RandomStatus implements IModel {
    private seed: number|null = null;
    private used: RandomUsed[]|null = null;
    public getSeed(): number|null {
        return this.seed;
    }
    public setSeed(seed: number|null) {
        this.seed = seed;
        return this;
    }
    public withSeed(seed: number|null): this {
        this.seed = seed;
        return this;
    }
    public getUsed(): RandomUsed[]|null {
        return this.used;
    }
    public setUsed(used: RandomUsed[]|null) {
        this.used = used;
        return this;
    }
    public withUsed(used: RandomUsed[]|null): this {
        this.used = used;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RandomStatus|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomStatus()
            .withSeed(data["seed"])
            .withUsed(data.used ?
                data.used.map((item: {[key: string]: any}) => {
                    return RandomUsed.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "seed": this.getSeed(),
            "used": this.getUsed() ?
                this.getUsed()!.map((item: RandomUsed) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
