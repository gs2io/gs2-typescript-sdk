import IModel from '../../core/interface/IModel';
import QuestQuestGroupModelQuestDistribution from './QuestQuestGroupModelQuestDistribution';
export default class QuestQuestGroupModelDistributions implements IModel {
    private quest;
    getQuest(): QuestQuestGroupModelQuestDistribution | null;
    setQuest(quest: QuestQuestGroupModelQuestDistribution | null): this;
    withQuest(quest: QuestQuestGroupModelQuestDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
