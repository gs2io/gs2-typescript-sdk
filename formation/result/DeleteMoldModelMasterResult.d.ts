import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DeleteMoldModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Formation.MoldModelMaster | null;
    setItem(item: Gs2Formation.MoldModelMaster | null): this;
    withItem(item: Gs2Formation.MoldModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteMoldModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
