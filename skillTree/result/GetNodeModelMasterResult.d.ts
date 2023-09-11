import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class GetNodeModelMasterResult implements IResult {
    private item;
    getItem(): Gs2SkillTree.NodeModelMaster | null;
    setItem(item: Gs2SkillTree.NodeModelMaster | null): this;
    withItem(item: Gs2SkillTree.NodeModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNodeModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
