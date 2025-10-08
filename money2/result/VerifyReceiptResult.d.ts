import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class VerifyReceiptResult implements IResult {
    private item;
    getItem(): Gs2Money2.Event | null;
    setItem(item: Gs2Money2.Event | null): this;
    withItem(item: Gs2Money2.Event | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyReceiptResult;
    toDict(): {
        [key: string]: any;
    };
}
