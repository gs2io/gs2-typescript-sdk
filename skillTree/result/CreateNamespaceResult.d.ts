import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2SkillTree.Namespace | null;
    setItem(item: Gs2SkillTree.Namespace | null): this;
    withItem(item: Gs2SkillTree.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
