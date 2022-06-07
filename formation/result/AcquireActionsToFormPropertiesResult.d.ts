import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class AcquireActionsToFormPropertiesResult implements IResult {
    private item;
    private mold;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItem(): Gs2Formation.Form | null;
    setItem(item: Gs2Formation.Form | null): this;
    withItem(item: Gs2Formation.Form | null): this;
    getMold(): Gs2Formation.Mold | null;
    setMold(mold: Gs2Formation.Mold | null): this;
    withMold(mold: Gs2Formation.Mold | null): this;
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
    }): AcquireActionsToFormPropertiesResult;
    toDict(): {
        [key: string]: any;
    };
}
