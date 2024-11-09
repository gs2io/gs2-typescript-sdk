import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class IssueOnceByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.SerialKey | null;
    setItem(item: Gs2SerialKey.SerialKey | null): this;
    withItem(item: Gs2SerialKey.SerialKey | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueOnceByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
