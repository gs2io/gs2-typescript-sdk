import IModel from '../../core/interface/IModel';
import QuestQuestRewardStatistics from './QuestQuestRewardStatistics';
export default class QuestQuestReward implements IModel {
    private action;
    private request;
    private count;
    private statistics;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getRequest(): string | null;
    setRequest(request: string | null): this;
    withRequest(request: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getStatistics(): QuestQuestRewardStatistics | null;
    setStatistics(statistics: QuestQuestRewardStatistics | null): this;
    withStatistics(statistics: QuestQuestRewardStatistics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestReward | null;
    toDict(): {
        [key: string]: any;
    };
}
