import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class RecordReceiptByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Money.Receipt | null;
    setItem(item: Gs2Money.Receipt | null): this;
    withItem(item: Gs2Money.Receipt | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RecordReceiptByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
