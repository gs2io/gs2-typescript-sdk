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

export default class BuffTargetGrn implements IModel {
    private targetModelName: string|null = null;
    private targetGrn: string|null = null;
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
    public getTargetGrn(): string|null {
        return this.targetGrn;
    }
    public setTargetGrn(targetGrn: string|null) {
        this.targetGrn = targetGrn;
        return this;
    }
    public withTargetGrn(targetGrn: string|null): this {
        this.targetGrn = targetGrn;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BuffTargetGrn|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffTargetGrn()
            .withTargetModelName(data["targetModelName"])
            .withTargetGrn(data["targetGrn"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "targetModelName": this.getTargetModelName(),
            "targetGrn": this.getTargetGrn(),
        };
    }
}
