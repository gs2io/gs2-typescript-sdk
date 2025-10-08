import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeStoreSubscriptionContentModelsResult implements IResult {
    private items;
    getItems(): Gs2Money2.StoreSubscriptionContentModel[] | null;
    setItems(items: Gs2Money2.StoreSubscriptionContentModel[] | null): this;
    withItems(items: Gs2Money2.StoreSubscriptionContentModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStoreSubscriptionContentModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
