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
import BuffTargetGrn from './BuffTargetGrn';

export default class BuffTargetAction implements IModel {
    private targetActionName: string|null = null;
    private targetFieldName: string|null = null;
    private conditionGrns: BuffTargetGrn[]|null = null;
    private rate: number|null = null;
    public getTargetActionName(): string|null {
        return this.targetActionName;
    }
    public setTargetActionName(targetActionName: string|null) {
        this.targetActionName = targetActionName;
        return this;
    }
    public withTargetActionName(targetActionName: string|null): this {
        this.targetActionName = targetActionName;
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
    public getConditionGrns(): BuffTargetGrn[]|null {
        return this.conditionGrns;
    }
    public setConditionGrns(conditionGrns: BuffTargetGrn[]|null) {
        this.conditionGrns = conditionGrns;
        return this;
    }
    public withConditionGrns(conditionGrns: BuffTargetGrn[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): BuffTargetAction|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffTargetAction()
            .withTargetActionName(data["targetActionName"])
            .withTargetFieldName(data["targetFieldName"])
            .withConditionGrns(data.conditionGrns ?
                data.conditionGrns.map((item: {[key: string]: any}) => {
                    return BuffTargetGrn.fromDict(item);
                }
            ) : [])
            .withRate(data["rate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "targetActionName": this.getTargetActionName(),
            "targetFieldName": this.getTargetFieldName(),
            "conditionGrns": this.getConditionGrns() ?
                this.getConditionGrns()!.map((item: BuffTargetGrn) => {
                    return item.toDict();
                }
            ) : [],
            "rate": this.getRate(),
        };
    }
}
