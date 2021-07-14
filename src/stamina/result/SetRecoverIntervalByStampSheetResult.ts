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

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Stamina from '../model'

export class SetRecoverIntervalByStampSheetResult implements IResult {
    private item: Gs2Stamina.Stamina|null = null;
    private staminaModel: Gs2Stamina.StaminaModel|null = null;

    public getItem(): Gs2Stamina.Stamina|null {
        return this.item;
    }

    public setItem(item: Gs2Stamina.Stamina|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Stamina.Stamina|null): this {
        this.item = item;
        return this;
    }

    public getStaminaModel(): Gs2Stamina.StaminaModel|null {
        return this.staminaModel;
    }

    public setStaminaModel(staminaModel: Gs2Stamina.StaminaModel|null) {
        this.staminaModel = staminaModel;
        return this;
    }

    public withStaminaModel(staminaModel: Gs2Stamina.StaminaModel|null): this {
        this.staminaModel = staminaModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SetRecoverIntervalByStampSheetResult {
        return new SetRecoverIntervalByStampSheetResult()
            .withItem(Gs2Stamina.Stamina.fromDict(data["item"]))
            .withStaminaModel(Gs2Stamina.StaminaModel.fromDict(data["staminaModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "staminaModel": this.getStaminaModel()?.toDict(),
        };
    }
}
