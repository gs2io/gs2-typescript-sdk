import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class UpdateCurrentTreeMasterResult implements IResult {
    private item;
    getItem(): Gs2SkillTree.CurrentTreeMaster | null;
    setItem(item: Gs2SkillTree.CurrentTreeMaster | null): this;
    withItem(item: Gs2SkillTree.CurrentTreeMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentTreeMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
