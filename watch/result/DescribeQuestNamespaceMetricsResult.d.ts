import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeQuestNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.QuestNamespace[] | null;
    setItems(items: Gs2Watch.QuestNamespace[] | null): this;
    withItems(items: Gs2Watch.QuestNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeQuestNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
