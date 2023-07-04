import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class DescribeIncrementalRateModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Exchange.IncrementalRateModelMaster[] | null;
    setItems(items: Gs2Exchange.IncrementalRateModelMaster[] | null): this;
    withItems(items: Gs2Exchange.IncrementalRateModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeIncrementalRateModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
