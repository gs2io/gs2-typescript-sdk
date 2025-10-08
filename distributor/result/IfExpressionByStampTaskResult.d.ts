import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class IfExpressionByStampTaskResult implements IResult {
    private item;
    private expressionResult;
    private newContextStack;
    getItem(): Gs2Distributor.TransactionResult | null;
    setItem(item: Gs2Distributor.TransactionResult | null): this;
    withItem(item: Gs2Distributor.TransactionResult | null): this;
    getExpressionResult(): boolean | null;
    setExpressionResult(expressionResult: boolean | null): this;
    withExpressionResult(expressionResult: boolean | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IfExpressionByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
