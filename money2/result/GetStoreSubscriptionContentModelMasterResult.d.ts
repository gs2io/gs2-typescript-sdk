import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class GetStoreSubscriptionContentModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Money2.StoreSubscriptionContentModelMaster | null;
    setItem(item: Gs2Money2.StoreSubscriptionContentModelMaster | null): this;
    withItem(item: Gs2Money2.StoreSubscriptionContentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStoreSubscriptionContentModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
