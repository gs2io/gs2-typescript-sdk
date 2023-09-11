import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class GetStatusResult implements IResult {
    private item;
    getItem(): Gs2SkillTree.Status | null;
    setItem(item: Gs2SkillTree.Status | null): this;
    withItem(item: Gs2SkillTree.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStatusResult;
    toDict(): {
        [key: string]: any;
    };
}
