import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class GetCurrentModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Chat.CurrentModelMaster | null;
    setItem(item: Gs2Chat.CurrentModelMaster | null): this;
    withItem(item: Gs2Chat.CurrentModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
