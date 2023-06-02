import IModel from '../../core/interface/IModel';
import QuestNamespaceQuestDistribution from './QuestNamespaceQuestDistribution';
export default class QuestNamespaceDistributions implements IModel {
    private quest;
    getQuest(): QuestNamespaceQuestDistribution | null;
    setQuest(quest: QuestNamespaceQuestDistribution | null): this;
    withQuest(quest: QuestNamespaceQuestDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
