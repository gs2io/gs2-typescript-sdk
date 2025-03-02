import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class GetStoreSubscriptionContentModelResult implements IResult {
    private item;
    getItem(): Gs2Money2.StoreSubscriptionContentModel | null;
    setItem(item: Gs2Money2.StoreSubscriptionContentModel | null): this;
    withItem(item: Gs2Money2.StoreSubscriptionContentModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStoreSubscriptionContentModelResult;
    toDict(): {
        [key: string]: any;
    };
}
