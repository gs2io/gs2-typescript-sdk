import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class DescribeUserDataByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Distributor.UserDataEntry[] | null;
    setItems(items: Gs2Distributor.UserDataEntry[] | null): this;
    withItems(items: Gs2Distributor.UserDataEntry[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeUserDataByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
