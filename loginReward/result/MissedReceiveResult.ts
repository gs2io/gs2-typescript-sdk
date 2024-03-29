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
import * as Gs2LoginReward from '../model'

export default class MissedReceiveResult implements IResult {
    private item: Gs2LoginReward.ReceiveStatus|null = null;
    private bonusModel: Gs2LoginReward.BonusModel|null = null;
    private transactionId: string|null = null;
    private stampSheet: string|null = null;
    private stampSheetEncryptionKeyId: string|null = null;
    private autoRunStampSheet: boolean|null = null;

    public getItem(): Gs2LoginReward.ReceiveStatus|null {
        return this.item;
    }

    public setItem(item: Gs2LoginReward.ReceiveStatus|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2LoginReward.ReceiveStatus|null): this {
        this.item = item;
        return this;
    }

    public getBonusModel(): Gs2LoginReward.BonusModel|null {
        return this.bonusModel;
    }

    public setBonusModel(bonusModel: Gs2LoginReward.BonusModel|null) {
        this.bonusModel = bonusModel;
        return this;
    }

    public withBonusModel(bonusModel: Gs2LoginReward.BonusModel|null): this {
        this.bonusModel = bonusModel;
        return this;
    }

    public getTransactionId(): string|null {
        return this.transactionId;
    }

    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }

    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
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

    public getAutoRunStampSheet(): boolean|null {
        return this.autoRunStampSheet;
    }

    public setAutoRunStampSheet(autoRunStampSheet: boolean|null) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    }

    public withAutoRunStampSheet(autoRunStampSheet: boolean|null): this {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissedReceiveResult {
        return new MissedReceiveResult()
            .withItem(Gs2LoginReward.ReceiveStatus.fromDict(data["item"]))
            .withBonusModel(Gs2LoginReward.BonusModel.fromDict(data["bonusModel"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "bonusModel": this.getBonusModel()?.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
        };
    }
}
