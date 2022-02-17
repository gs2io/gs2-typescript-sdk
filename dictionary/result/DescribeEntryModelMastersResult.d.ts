import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DescribeEntryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Dictionary.EntryModelMaster[] | null;
    setItems(items: Gs2Dictionary.EntryModelMaster[] | null): this;
    withItems(items: Gs2Dictionary.EntryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEntryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
