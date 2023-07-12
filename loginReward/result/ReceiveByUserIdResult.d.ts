import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class ReceiveByUserIdResult implements IResult {
    private item;
    private bonusModel;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
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
    static fromDict(data: {
        [key: string]: any;
    }): ReceiveByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
