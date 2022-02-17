import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class DescribeGlobalMessageMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Inbox.GlobalMessageMaster[] | null;
    setItems(items: Gs2Inbox.GlobalMessageMaster[] | null): this;
    withItems(items: Gs2Inbox.GlobalMessageMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGlobalMessageMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
