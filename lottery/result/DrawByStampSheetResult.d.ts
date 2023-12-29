import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DrawByStampSheetResult implements IResult {
    private items;
    private boxItems;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItems(): Gs2Lottery.DrawnPrize[] | null;
    setItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    withItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    getBoxItems(): Gs2Lottery.BoxItems | null;
    setBoxItems(boxItems: Gs2Lottery.BoxItems | null): this;
    withBoxItems(boxItems: Gs2Lottery.BoxItems | null): this;
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
    }): DrawByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
