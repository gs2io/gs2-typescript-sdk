import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class SkipResult implements IResult {
    private item;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    getItem(): Gs2Exchange.Await | null;
    setItem(item: Gs2Exchange.Await | null): this;
    withItem(item: Gs2Exchange.Await | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SkipResult;
    toDict(): {
        [key: string]: any;
    };
}