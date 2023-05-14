import IModel from '../../core/interface/IModel';
import QuestQuestDurationSeconds from './QuestQuestDurationSeconds';
export default class QuestQuestStatistics implements IModel {
    private count;
    private clearRate;
    private durationSeconds;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getClearRate(): number | null;
    setClearRate(clearRate: number | null): this;
    withClearRate(clearRate: number | null): this;
    getDurationSeconds(): QuestQuestDurationSeconds | null;
    setDurationSeconds(durationSeconds: QuestQuestDurationSeconds | null): this;
    withDurationSeconds(durationSeconds: QuestQuestDurationSeconds | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
