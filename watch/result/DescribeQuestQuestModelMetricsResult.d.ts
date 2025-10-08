import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeQuestQuestModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.QuestQuestModel[] | null;
    setItems(items: Gs2Watch.QuestQuestModel[] | null): this;
    withItems(items: Gs2Watch.QuestQuestModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestQuestModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
