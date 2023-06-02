import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetDictionaryNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.DictionaryNamespace | null;
    setItem(item: Gs2Watch.DictionaryNamespace | null): this;
    withItem(item: Gs2Watch.DictionaryNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDictionaryNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
