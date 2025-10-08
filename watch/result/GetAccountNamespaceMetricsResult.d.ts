import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetAccountNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.AccountNamespace | null;
    setItem(item: Gs2Watch.AccountNamespace | null): this;
    withItem(item: Gs2Watch.AccountNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAccountNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
