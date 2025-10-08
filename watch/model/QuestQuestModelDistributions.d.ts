import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestQuestModelDistributions implements IModel {
    private playTimeSeconds;
    getPlayTimeSeconds(): Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution | null;
    setPlayTimeSeconds(playTimeSeconds: Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution | null): this;
    withPlayTimeSeconds(playTimeSeconds: Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
