import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetFriendNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.FriendNamespace | null;
    setItem(item: Gs2Watch.FriendNamespace | null): this;
    withItem(item: Gs2Watch.FriendNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFriendNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
