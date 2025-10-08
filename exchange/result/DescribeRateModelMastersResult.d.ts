import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class DescribeRateModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Exchange.RateModelMaster[] | null;
    setItems(items: Gs2Exchange.RateModelMaster[] | null): this;
    withItems(items: Gs2Exchange.RateModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRateModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
