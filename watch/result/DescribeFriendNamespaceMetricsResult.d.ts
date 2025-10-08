import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeFriendNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.FriendNamespace[] | null;
    setItems(items: Gs2Watch.FriendNamespace[] | null): this;
    withItems(items: Gs2Watch.FriendNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFriendNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
