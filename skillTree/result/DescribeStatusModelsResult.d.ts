import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class DescribeStatusModelsResult implements IResult {
    private items;
    getItems(): Gs2SkillTree.NodeModel[] | null;
    setItems(items: Gs2SkillTree.NodeModel[] | null): this;
    withItems(items: Gs2SkillTree.NodeModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStatusModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
