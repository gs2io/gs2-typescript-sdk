import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetQuestQuestModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.QuestQuestModel | null;
    setItem(item: Gs2Watch.QuestQuestModel | null): this;
    withItem(item: Gs2Watch.QuestQuestModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestQuestModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
