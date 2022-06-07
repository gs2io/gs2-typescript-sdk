import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DirectEnhanceResult implements IResult {
    private item;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    private acquireExperience;
    private bonusRate;
    getItem(): Gs2Enhance.RateModel | null;
    setItem(item: Gs2Enhance.RateModel | null): this;
    withItem(item: Gs2Enhance.RateModel | null): this;
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
    getAcquireExperience(): number | null;
    setAcquireExperience(acquireExperience: number | null): this;
    withAcquireExperience(acquireExperience: number | null): this;
    getBonusRate(): number | null;
    setBonusRate(bonusRate: number | null): this;
    withBonusRate(bonusRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DirectEnhanceResult;
    toDict(): {
        [key: string]: any;
    };
}
