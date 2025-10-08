import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class UpdateStoreSubscriptionContentModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Money2.StoreSubscriptionContentModelMaster | null;
    setItem(item: Gs2Money2.StoreSubscriptionContentModelMaster | null): this;
    withItem(item: Gs2Money2.StoreSubscriptionContentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStoreSubscriptionContentModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
