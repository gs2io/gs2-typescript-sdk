import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetQuestMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.QuestMetrics | null;
    setItem(item: Gs2Watch.QuestMetrics | null): this;
    withItem(item: Gs2Watch.QuestMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
