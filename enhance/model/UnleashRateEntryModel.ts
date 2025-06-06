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

import * as Gs2Enhance from '../../enhance/model'

export default class UnleashRateEntryModel implements IModel {
    private gradeValue: number|null = null;
    private needCount: number|null = null;
    public getGradeValue(): number|null {
        return this.gradeValue;
    }
    public setGradeValue(gradeValue: number|null) {
        this.gradeValue = gradeValue;
        return this;
    }
    public withGradeValue(gradeValue: number|null): this {
        this.gradeValue = gradeValue;
        return this;
    }
    public getNeedCount(): number|null {
        return this.needCount;
    }
    public setNeedCount(needCount: number|null) {
        this.needCount = needCount;
        return this;
    }
    public withNeedCount(needCount: number|null): this {
        this.needCount = needCount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UnleashRateEntryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashRateEntryModel()
            .withGradeValue(data["gradeValue"])
            .withNeedCount(data["needCount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "gradeValue": this.getGradeValue(),
            "needCount": this.getNeedCount(),
        };
    }
}
