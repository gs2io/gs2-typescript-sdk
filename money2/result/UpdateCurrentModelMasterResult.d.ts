import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class UpdateCurrentModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Money2.CurrentModelMaster | null;
    setItem(item: Gs2Money2.CurrentModelMaster | null): this;
    withItem(item: Gs2Money2.CurrentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
