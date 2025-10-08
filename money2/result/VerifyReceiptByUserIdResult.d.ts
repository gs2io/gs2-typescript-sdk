import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class VerifyReceiptByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Money2.Event | null;
    setItem(item: Gs2Money2.Event | null): this;
    withItem(item: Gs2Money2.Event | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyReceiptByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
