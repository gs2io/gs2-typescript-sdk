import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeQuestQuestGroupModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.QuestQuestGroupModel[] | null;
    setItems(items: Gs2Watch.QuestQuestGroupModel[] | null): this;
    withItems(items: Gs2Watch.QuestQuestGroupModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestQuestGroupModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
