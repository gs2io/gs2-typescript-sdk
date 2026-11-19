import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class VerifyStatusResult implements IResult {
    private item;
    getItem(): Gs2SkillTree.Status | null;
    setItem(item: Gs2SkillTree.Status | null): this;
    withItem(item: Gs2SkillTree.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStatusResult;
    toDict(): {
        [key: string]: any;
    };
}
