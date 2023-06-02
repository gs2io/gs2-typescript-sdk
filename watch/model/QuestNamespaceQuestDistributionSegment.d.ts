import IModel from '../../core/interface/IModel';
export default class QuestNamespaceQuestDistributionSegment implements IModel {
    private questGroupName;
    private count;
    getQuestGroupName(): string | null;
    setQuestGroupName(questGroupName: string | null): this;
    withQuestGroupName(questGroupName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespaceQuestDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
