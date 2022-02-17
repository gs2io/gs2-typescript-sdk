import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DescribeQuestGroupModelsResult implements IResult {
    private items;
    getItems(): Gs2Quest.QuestGroupModel[] | null;
    setItems(items: Gs2Quest.QuestGroupModel[] | null): this;
    withItems(items: Gs2Quest.QuestGroupModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestGroupModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
