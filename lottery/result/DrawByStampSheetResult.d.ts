import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DrawByStampSheetResult implements IResult {
    private items;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private boxItems;
    getItems(): Gs2Lottery.DrawnPrize[] | null;
    setItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    withItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    getBoxItems(): Gs2Lottery.BoxItems | null;
    setBoxItems(boxItems: Gs2Lottery.BoxItems | null): this;
    withBoxItems(boxItems: Gs2Lottery.BoxItems | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DrawByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
