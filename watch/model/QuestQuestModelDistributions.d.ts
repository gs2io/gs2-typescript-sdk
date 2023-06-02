import IModel from '../../core/interface/IModel';
import QuestQuestModelPlayTimeSecondsDistribution from './QuestQuestModelPlayTimeSecondsDistribution';
export default class QuestQuestModelDistributions implements IModel {
    private playTimeSeconds;
    getPlayTimeSeconds(): QuestQuestModelPlayTimeSecondsDistribution | null;
    setPlayTimeSeconds(playTimeSeconds: QuestQuestModelPlayTimeSecondsDistribution | null): this;
    withPlayTimeSeconds(playTimeSeconds: QuestQuestModelPlayTimeSecondsDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
