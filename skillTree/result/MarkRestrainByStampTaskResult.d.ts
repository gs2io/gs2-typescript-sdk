import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class MarkRestrainByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2SkillTree.Status | null;
    setItem(item: Gs2SkillTree.Status | null): this;
    withItem(item: Gs2SkillTree.Status | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MarkRestrainByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
