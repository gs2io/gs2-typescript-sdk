import IModel from '../../core/interface/IModel';
export default class TierModel implements IModel {
    private metadata;
    private raiseRankBonus;
    private entryFee;
    private minimumChangePoint;
    private maximumChangePoint;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getRaiseRankBonus(): number | null;
    setRaiseRankBonus(raiseRankBonus: number | null): this;
    withRaiseRankBonus(raiseRankBonus: number | null): this;
    getEntryFee(): number | null;
    setEntryFee(entryFee: number | null): this;
    withEntryFee(entryFee: number | null): this;
    getMinimumChangePoint(): number | null;
    setMinimumChangePoint(minimumChangePoint: number | null): this;
    withMinimumChangePoint(minimumChangePoint: number | null): this;
    getMaximumChangePoint(): number | null;
    setMaximumChangePoint(maximumChangePoint: number | null): this;
    withMaximumChangePoint(maximumChangePoint: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TierModel | null;
    toDict(): {
        [key: string]: any;
    };
}
