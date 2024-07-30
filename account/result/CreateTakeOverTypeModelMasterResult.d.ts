import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class CreateTakeOverTypeModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Account.TakeOverTypeModelMaster | null;
    setItem(item: Gs2Account.TakeOverTypeModelMaster | null): this;
    withItem(item: Gs2Account.TakeOverTypeModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateTakeOverTypeModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
