import IModel from '../../core/interface/IModel';
export default class QuestQuestGroupModelQuestDistributionSegment implements IModel {
    private questName;
    private count;
    getQuestName(): string | null;
    setQuestName(questName: string | null): this;
    withQuestName(questName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModelQuestDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
