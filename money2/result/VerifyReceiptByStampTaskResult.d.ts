import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class VerifyReceiptByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Money2.Event | null;
    setItem(item: Gs2Money2.Event | null): this;
    withItem(item: Gs2Money2.Event | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyReceiptByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
