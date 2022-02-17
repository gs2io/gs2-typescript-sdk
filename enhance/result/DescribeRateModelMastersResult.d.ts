import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DescribeRateModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Enhance.RateModelMaster[] | null;
    setItems(items: Gs2Enhance.RateModelMaster[] | null): this;
    withItems(items: Gs2Enhance.RateModelMaster[] | null): this;
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
