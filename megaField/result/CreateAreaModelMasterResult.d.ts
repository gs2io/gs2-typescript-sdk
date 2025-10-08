import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class CreateAreaModelMasterResult implements IResult {
    private item;
    getItem(): Gs2MegaField.AreaModelMaster | null;
    setItem(item: Gs2MegaField.AreaModelMaster | null): this;
    withItem(item: Gs2MegaField.AreaModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateAreaModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
