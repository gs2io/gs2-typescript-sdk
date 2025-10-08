import IModel from '../../core/interface/IModel';
import * as Gs2Ranking2 from '../../ranking2/model';
export default class RankingReward implements IModel {
    private thresholdRank;
    private metadata;
    private acquireActions;
    getThresholdRank(): number | null;
    setThresholdRank(thresholdRank: number | null): this;
    withThresholdRank(thresholdRank: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getAcquireActions(): Gs2Ranking2.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Ranking2.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Ranking2.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingReward | null;
    toDict(): {
        [key: string]: any;
    };
}
