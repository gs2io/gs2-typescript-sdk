import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeDictionaryNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.DictionaryNamespace[] | null;
    setItems(items: Gs2Watch.DictionaryNamespace[] | null): this;
    withItems(items: Gs2Watch.DictionaryNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDictionaryNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
