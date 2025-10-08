import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class UpdateSalesItemGroupMasterResult implements IResult {
    private item;
    getItem(): Gs2Showcase.SalesItemGroupMaster | null;
    setItem(item: Gs2Showcase.SalesItemGroupMaster | null): this;
    withItem(item: Gs2Showcase.SalesItemGroupMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateSalesItemGroupMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
