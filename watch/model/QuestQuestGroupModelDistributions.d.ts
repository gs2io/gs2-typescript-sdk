import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestQuestGroupModelDistributions implements IModel {
    private quest;
    getQuest(): Gs2Watch.QuestQuestGroupModelQuestDistribution | null;
    setQuest(quest: Gs2Watch.QuestQuestGroupModelQuestDistribution | null): this;
    withQuest(quest: Gs2Watch.QuestQuestGroupModelQuestDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
