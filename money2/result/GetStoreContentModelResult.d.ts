import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class GetStoreContentModelResult implements IResult {
    private item;
    getItem(): Gs2Money2.StoreContentModel | null;
    setItem(item: Gs2Money2.StoreContentModel | null): this;
    withItem(item: Gs2Money2.StoreContentModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStoreContentModelResult;
    toDict(): {
        [key: string]: any;
    };
}
