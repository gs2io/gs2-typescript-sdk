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
import * as Gs2Lottery from '../model'
import * as Gs2Core from '../../core'

export default class DrawWithRandomSeedByUserIdResult implements IResult {
    private items: Gs2Lottery.DrawnPrize[]|null = null;
    private transactionId: string|null = null;
    private stampSheet: string|null = null;
    private stampSheetEncryptionKeyId: string|null = null;
    private autoRunStampSheet: boolean|null = null;
    private atomicCommit: boolean|null = null;
    private transaction: string|null = null;
    private transactionResult: Gs2Core.TransactionResult|null = null;

    public getItems(): Gs2Lottery.DrawnPrize[]|null {
        return this.items;
    }

    public setItems(items: Gs2Lottery.DrawnPrize[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Lottery.DrawnPrize[]|null): this {
        this.items = items;
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

    public getAtomicCommit(): boolean|null {
        return this.atomicCommit;
    }

    public setAtomicCommit(atomicCommit: boolean|null) {
        this.atomicCommit = atomicCommit;
        return this;
    }

    public withAtomicCommit(atomicCommit: boolean|null): this {
        this.atomicCommit = atomicCommit;
        return this;
    }

    public getTransaction(): string|null {
        return this.transaction;
    }

    public setTransaction(transaction: string|null) {
        this.transaction = transaction;
        return this;
    }

    public withTransaction(transaction: string|null): this {
        this.transaction = transaction;
        return this;
    }

    public getTransactionResult(): Gs2Core.TransactionResult|null {
        return this.transactionResult;
    }

    public setTransactionResult(transactionResult: Gs2Core.TransactionResult|null) {
        this.transactionResult = transactionResult;
        return this;
    }

    public withTransactionResult(transactionResult: Gs2Core.TransactionResult|null): this {
        this.transactionResult = transactionResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DrawWithRandomSeedByUserIdResult {
        return new DrawWithRandomSeedByUserIdResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Lottery.DrawnPrize.fromDict(item);
                }
            ) : null)
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Lottery.DrawnPrize) => {
                    return item.toDict();
                }
            ) : null,
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": this.getTransactionResult()?.toDict(),
        };
    }
}
