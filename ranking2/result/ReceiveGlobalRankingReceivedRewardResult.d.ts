import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class ReceiveGlobalRankingReceivedRewardResult implements IResult {
    private item;
    private acquireActions;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItem(): Gs2Ranking2.GlobalRankingModel | null;
    setItem(item: Gs2Ranking2.GlobalRankingModel | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingModel | null): this;
    getAcquireActions(): Gs2Ranking2.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Ranking2.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Ranking2.AcquireAction[] | null): this;
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
    }): ReceiveGlobalRankingReceivedRewardResult;
    toDict(): {
        [key: string]: any;
    };
}
