import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetChatNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ChatNamespace | null;
    setItem(item: Gs2Watch.ChatNamespace | null): this;
    withItem(item: Gs2Watch.ChatNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetChatNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
