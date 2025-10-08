import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
import * as Gs2Core from '../../core';
export default class MissedReceiveResult implements IResult {
    private item;
    private bonusModel;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    private atomicCommit;
    private transaction;
    private transactionResult;
    getItem(): Gs2LoginReward.ReceiveStatus | null;
    setItem(item: Gs2LoginReward.ReceiveStatus | null): this;
    withItem(item: Gs2LoginReward.ReceiveStatus | null): this;
    getBonusModel(): Gs2LoginReward.BonusModel | null;
    setBonusModel(bonusModel: Gs2LoginReward.BonusModel | null): this;
    withBonusModel(bonusModel: Gs2LoginReward.BonusModel | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    getAutoRunStampSheet(): boolean | null;
    setAutoRunStampSheet(autoRunStampSheet: boolean | null): this;
    withAutoRunStampSheet(autoRunStampSheet: boolean | null): this;
    getAtomicCommit(): boolean | null;
    setAtomicCommit(atomicCommit: boolean | null): this;
    withAtomicCommit(atomicCommit: boolean | null): this;
    getTransaction(): string | null;
    setTransaction(transaction: string | null): this;
    withTransaction(transaction: string | null): this;
    getTransactionResult(): Gs2Core.TransactionResult | null;
    setTransactionResult(transactionResult: Gs2Core.TransactionResult | null): this;
    withTransactionResult(transactionResult: Gs2Core.TransactionResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissedReceiveResult;
    toDict(): {
        [key: string]: any;
    };
}
