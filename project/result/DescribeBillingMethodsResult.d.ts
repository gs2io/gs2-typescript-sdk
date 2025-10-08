import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DescribeBillingMethodsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Project.BillingMethod[] | null;
    setItems(items: Gs2Project.BillingMethod[] | null): this;
    withItems(items: Gs2Project.BillingMethod[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBillingMethodsResult;
    toDict(): {
        [key: string]: any;
    };
}
