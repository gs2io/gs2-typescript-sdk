import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetQuestNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.QuestNamespace | null;
    setItem(item: Gs2Watch.QuestNamespace | null): this;
    withItem(item: Gs2Watch.QuestNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
