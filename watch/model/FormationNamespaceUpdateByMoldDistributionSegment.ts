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

export default class FormationNamespaceUpdateByMoldDistributionSegment implements IModel {
    private moldModelName: string|null = null;
    private count: number|null = null;
    public getMoldModelName(): string|null {
        return this.moldModelName;
    }
    public setMoldModelName(moldModelName: string|null) {
        this.moldModelName = moldModelName;
        return this;
    }
    public withMoldModelName(moldModelName: string|null): this {
        this.moldModelName = moldModelName;
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

    public static fromDict(data: {[key: string]: any}): FormationNamespaceUpdateByMoldDistributionSegment|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceUpdateByMoldDistributionSegment()
            .withMoldModelName(data["moldModelName"])
            .withCount(data["count"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "moldModelName": this.getMoldModelName(),
            "count": this.getCount(),
        };
    }
}
