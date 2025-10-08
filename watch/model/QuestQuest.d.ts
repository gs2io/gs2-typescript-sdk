import IModel from '../../core/interface/IModel';
import QuestQuestStatistics from './QuestQuestStatistics';
export default class QuestQuest implements IModel {
    private name;
    private statistics;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getStatistics(): QuestQuestStatistics | null;
    setStatistics(statistics: QuestQuestStatistics | null): this;
    withStatistics(statistics: QuestQuestStatistics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuest | null;
    toDict(): {
        [key: string]: any;
    };
}
