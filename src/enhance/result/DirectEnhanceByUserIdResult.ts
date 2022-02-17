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

import IResult from '../../core/interface/IResult';

import * as Gs2Enhance from '../model'

export class DirectEnhanceByUserIdResult implements IResult {
    private item: Gs2Enhance.RateModel|null = null;
    private stampSheet: string|null = null;
    private stampSheetEncryptionKeyId: string|null = null;
    private acquireExperience: number|null = null;
    private bonusRate: number|null = null;

    public getItem(): Gs2Enhance.RateModel|null {
        return this.item;
    }

    public setItem(item: Gs2Enhance.RateModel|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Enhance.RateModel|null): this {
        this.item = item;
        return this;
    }

    public getStampSheet(): string|null {
        return this.stampSheet;
    }

    public setStampSheet(stampSheet: string|null) {
        this.stampSheet = stampSheet;
        return this;
    }

    public withStampSheet(stampSheet: string|null): this {
        this.stampSheet = stampSheet;
        return this;
    }

    public getStampSheetEncryptionKeyId(): string|null {
        return this.stampSheetEncryptionKeyId;
    }

    public setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string|null) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    }

    public withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string|null): this {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    }

    public getAcquireExperience(): number|null {
        return this.acquireExperience;
    }

    public setAcquireExperience(acquireExperience: number|null) {
        this.acquireExperience = acquireExperience;
        return this;
    }

    public withAcquireExperience(acquireExperience: number|null): this {
        this.acquireExperience = acquireExperience;
        return this;
    }

    public getBonusRate(): number|null {
        return this.bonusRate;
    }

    public setBonusRate(bonusRate: number|null) {
        this.bonusRate = bonusRate;
        return this;
    }

    public withBonusRate(bonusRate: number|null): this {
        this.bonusRate = bonusRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DirectEnhanceByUserIdResult {
        return new DirectEnhanceByUserIdResult()
            .withItem(Gs2Enhance.RateModel.fromDict(data["item"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAcquireExperience(data["acquireExperience"])
            .withBonusRate(data["bonusRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "acquireExperience": this.getAcquireExperience(),
            "bonusRate": this.getBonusRate(),
        };
    }
}
