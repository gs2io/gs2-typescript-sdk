import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DescribeQuestModelsResult implements IResult {
    private items;
    getItems(): Gs2Quest.QuestModel[] | null;
    setItems(items: Gs2Quest.QuestModel[] | null): this;
    withItems(items: Gs2Quest.QuestModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
