import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeStoreContentModelsResult implements IResult {
    private items;
    getItems(): Gs2Money2.StoreContentModel[] | null;
    setItems(items: Gs2Money2.StoreContentModel[] | null): this;
    withItems(items: Gs2Money2.StoreContentModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStoreContentModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
