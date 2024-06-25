import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DeleteStoreContentModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Money2.StoreContentModelMaster | null;
    setItem(item: Gs2Money2.StoreContentModelMaster | null): this;
    withItem(item: Gs2Money2.StoreContentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteStoreContentModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
