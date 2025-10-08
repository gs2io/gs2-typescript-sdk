import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class DescribeVersionModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Version.VersionModelMaster[] | null;
    setItems(items: Gs2Version.VersionModelMaster[] | null): this;
    withItems(items: Gs2Version.VersionModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeVersionModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
