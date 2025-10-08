import IModel from '../../core/interface/IModel';
export default class MissionNamespaceIncreaseAmountDistributionSegment implements IModel {
    private counterName;
    private sum;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getSum(): number | null;
    setSum(sum: number | null): this;
    withSum(sum: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceIncreaseAmountDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
