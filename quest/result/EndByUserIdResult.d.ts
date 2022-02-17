import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class EndByUserIdResult implements IResult {
    private item;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    getItem(): Gs2Quest.Progress | null;
    setItem(item: Gs2Quest.Progress | null): this;
    withItem(item: Gs2Quest.Progress | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EndByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
