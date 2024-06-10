import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
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
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingReward | null;
    toDict(): {
        [key: string]: any;
    };
}
