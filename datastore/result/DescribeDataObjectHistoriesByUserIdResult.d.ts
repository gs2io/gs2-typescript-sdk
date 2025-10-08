import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class DescribeDataObjectHistoriesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Datastore.DataObjectHistory[] | null;
    setItems(items: Gs2Datastore.DataObjectHistory[] | null): this;
    withItems(items: Gs2Datastore.DataObjectHistory[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDataObjectHistoriesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
