import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class DescribeDataObjectsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Datastore.DataObject[] | null;
    setItems(items: Gs2Datastore.DataObject[] | null): this;
    withItems(items: Gs2Datastore.DataObject[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDataObjectsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
