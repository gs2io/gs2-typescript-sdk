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

export default class InboxNamespaceReadElapsedMinutesDistributionSegment implements IModel {
    private min: number|null = null;
    private max: number|null = null;
    private count: number|null = null;
    public getMin(): number|null {
        return this.min;
    }
    public setMin(min: number|null) {
        this.min = min;
        return this;
    }
    public withMin(min: number|null): this {
        this.min = min;
        return this;
    }
    public getMax(): number|null {
        return this.max;
    }
    public setMax(max: number|null) {
        this.max = max;
        return this;
    }
    public withMax(max: number|null): this {
        this.max = max;
        return this;
    }
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InboxNamespaceReadElapsedMinutesDistributionSegment|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespaceReadElapsedMinutesDistributionSegment()
            .withMin(data["min"])
            .withMax(data["max"])
            .withCount(data["count"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "count": this.getCount(),
        };
    }
}
