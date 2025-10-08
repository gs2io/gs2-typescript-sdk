import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestNamespaceDistributions implements IModel {
    private quest;
    getQuest(): Gs2Watch.QuestNamespaceQuestDistribution | null;
    setQuest(quest: Gs2Watch.QuestNamespaceQuestDistribution | null): this;
    withQuest(quest: Gs2Watch.QuestNamespaceQuestDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
