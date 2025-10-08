import IResult from '../../core/interface/IResult';
import * as Gs2SkillTree from '../model';
export default class DescribeNodeModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2SkillTree.NodeModelMaster[] | null;
    setItems(items: Gs2SkillTree.NodeModelMaster[] | null): this;
    withItems(items: Gs2SkillTree.NodeModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNodeModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
