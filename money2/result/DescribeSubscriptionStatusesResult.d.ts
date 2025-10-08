import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeSubscriptionStatusesResult implements IResult {
    private items;
    getItems(): Gs2Money2.SubscriptionStatus[] | null;
    setItems(items: Gs2Money2.SubscriptionStatus[] | null): this;
    withItems(items: Gs2Money2.SubscriptionStatus[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSubscriptionStatusesResult;
    toDict(): {
        [key: string]: any;
    };
}
