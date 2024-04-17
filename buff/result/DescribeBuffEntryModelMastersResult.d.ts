import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class DescribeBuffEntryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Buff.BuffEntryModelMaster[] | null;
    setItems(items: Gs2Buff.BuffEntryModelMaster[] | null): this;
    withItems(items: Gs2Buff.BuffEntryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBuffEntryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
