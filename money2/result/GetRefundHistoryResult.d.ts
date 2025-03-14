import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class GetRefundHistoryResult implements IResult {
    private item;
    getItem(): Gs2Money2.RefundHistory | null;
    setItem(item: Gs2Money2.RefundHistory | null): this;
    withItem(item: Gs2Money2.RefundHistory | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRefundHistoryResult;
    toDict(): {
        [key: string]: any;
    };
}
