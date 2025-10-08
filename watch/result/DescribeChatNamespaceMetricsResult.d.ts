import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeChatNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ChatNamespace[] | null;
    setItems(items: Gs2Watch.ChatNamespace[] | null): this;
    withItems(items: Gs2Watch.ChatNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeChatNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
