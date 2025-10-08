import IModel from '../../core/interface/IModel';
export default class MissionNamespaceIncreaseDistributionSegment implements IModel {
    private counterName;
    private count;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceIncreaseDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
