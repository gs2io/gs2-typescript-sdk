import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class DescribeNamespacesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2LoginReward.Namespace[] | null;
    setItems(items: Gs2LoginReward.Namespace[] | null): this;
    withItems(items: Gs2LoginReward.Namespace[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNamespacesResult;
    toDict(): {
        [key: string]: any;
    };
}
