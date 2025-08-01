import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class CreateCategoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Chat.CategoryModelMaster | null;
    setItem(item: Gs2Chat.CategoryModelMaster | null): this;
    withItem(item: Gs2Chat.CategoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateCategoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
