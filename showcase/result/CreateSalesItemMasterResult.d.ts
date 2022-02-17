import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class CreateSalesItemMasterResult implements IResult {
    private item;
    getItem(): Gs2Showcase.SalesItemMaster | null;
    setItem(item: Gs2Showcase.SalesItemMaster | null): this;
    withItem(item: Gs2Showcase.SalesItemMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateSalesItemMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
