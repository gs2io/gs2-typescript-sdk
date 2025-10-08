import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetQuestQuestGroupModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.QuestQuestGroupModel | null;
    setItem(item: Gs2Watch.QuestQuestGroupModel | null): this;
    withItem(item: Gs2Watch.QuestQuestGroupModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestQuestGroupModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
