import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetKeyNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.KeyNamespace | null;
    setItem(item: Gs2Watch.KeyNamespace | null): this;
    withItem(item: Gs2Watch.KeyNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetKeyNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
