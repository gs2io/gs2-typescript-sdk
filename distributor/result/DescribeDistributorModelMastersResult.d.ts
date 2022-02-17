import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class DescribeDistributorModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Distributor.DistributorModelMaster[] | null;
    setItems(items: Gs2Distributor.DistributorModelMaster[] | null): this;
    withItems(items: Gs2Distributor.DistributorModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDistributorModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
