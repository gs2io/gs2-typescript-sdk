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

import * as Gs2Buff from '../../buff/model'
import BuffTargetGrn from './BuffTargetGrn';

export default class BuffTargetModel implements IModel {
    private targetModelName: string|null = null;
    private targetFieldName: string|null = null;
    private conditionGrns: Gs2Buff.BuffTargetGrn[]|null = null;
    private rate: number|null = null;
    public getTargetModelName(): string|null {
        return this.targetModelName;
    }
    public setTargetModelName(targetModelName: string|null) {
        this.targetModelName = targetModelName;
        return this;
    }
    public withTargetModelName(targetModelName: string|null): this {
        this.targetModelName = targetModelName;
        return this;
    }
    public getTargetFieldName(): string|null {
        return this.targetFieldName;
    }
    public setTargetFieldName(targetFieldName: string|null) {
        this.targetFieldName = targetFieldName;
        return this;
    }
    public withTargetFieldName(targetFieldName: string|null): this {
        this.targetFieldName = targetFieldName;
        return this;
    }
    public getConditionGrns(): Gs2Buff.BuffTargetGrn[]|null {
        return this.conditionGrns;
    }
    public setConditionGrns(conditionGrns: Gs2Buff.BuffTargetGrn[]|null) {
        this.conditionGrns = conditionGrns;
        return this;
    }
    public withConditionGrns(conditionGrns: Gs2Buff.BuffTargetGrn[]|null): this {
        this.conditionGrns = conditionGrns;
        return this;
    }
    public getRate(): number|null {
        return this.rate;
    }
    public setRate(rate: number|null) {
        this.rate = rate;
        return this;
    }
    public withRate(rate: number|null): this {
        this.rate = rate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BuffTargetModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffTargetModel()
            .withTargetModelName(data["targetModelName"])
            .withTargetFieldName(data["targetFieldName"])
            .withConditionGrns(data.conditionGrns ?
                data.conditionGrns.map((item: {[key: string]: any}) => {
                    return Gs2Buff.BuffTargetGrn.fromDict(item);
                }
            ) : null)
            .withRate(data["rate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "targetModelName": this.getTargetModelName(),
            "targetFieldName": this.getTargetFieldName(),
            "conditionGrns": this.getConditionGrns() ?
                this.getConditionGrns()!.map((item: Gs2Buff.BuffTargetGrn) => {
                    return item.toDict();
                }
            ) : null,
            "rate": this.getRate(),
        };
    }
}
