import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class UpdateCurrentIdleMasterResult implements IResult {
    private item;
    getItem(): Gs2Idle.CurrentCategoryMaster | null;
    setItem(item: Gs2Idle.CurrentCategoryMaster | null): this;
    withItem(item: Gs2Idle.CurrentCategoryMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentIdleMasterResult;
    toDict(): {
        [key: string]: any;
    };
}