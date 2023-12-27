import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DescribeUnleashRateModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Enhance.UnleashRateModelMaster[] | null;
    setItems(items: Gs2Enhance.UnleashRateModelMaster[] | null): this;
    withItems(items: Gs2Enhance.UnleashRateModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeUnleashRateModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
