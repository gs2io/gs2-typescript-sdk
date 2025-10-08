import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class IfExpressionByUserIdResult implements IResult {
    private item;
    private expressionResult;
    getItem(): Gs2Distributor.TransactionResult | null;
    setItem(item: Gs2Distributor.TransactionResult | null): this;
    withItem(item: Gs2Distributor.TransactionResult | null): this;
    getExpressionResult(): boolean | null;
    setExpressionResult(expressionResult: boolean | null): this;
    withExpressionResult(expressionResult: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IfExpressionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
