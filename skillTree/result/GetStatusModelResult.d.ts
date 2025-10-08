import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class GetStatusModelResult implements IResult {
    private item;
    getItem(): Gs2SkillTree.NodeModel | null;
    setItem(item: Gs2SkillTree.NodeModel | null): this;
    withItem(item: Gs2SkillTree.NodeModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStatusModelResult;
    toDict(): {
        [key: string]: any;
    };
}
