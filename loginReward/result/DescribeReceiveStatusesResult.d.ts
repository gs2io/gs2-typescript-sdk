import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class DescribeReceiveStatusesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2LoginReward.ReceiveStatus[] | null;
    setItems(items: Gs2LoginReward.ReceiveStatus[] | null): this;
    withItems(items: Gs2LoginReward.ReceiveStatus[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeReceiveStatusesResult;
    toDict(): {
        [key: string]: any;
    };
}
