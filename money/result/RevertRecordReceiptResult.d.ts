import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class RevertRecordReceiptResult implements IResult {
    private item;
    getItem(): Gs2Money.Receipt | null;
    setItem(item: Gs2Money.Receipt | null): this;
    withItem(item: Gs2Money.Receipt | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RevertRecordReceiptResult;
    toDict(): {
        [key: string]: any;
    };
}
