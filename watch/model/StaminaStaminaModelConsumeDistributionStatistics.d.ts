import IModel from '../../core/interface/IModel';
export default class StaminaStaminaModelConsumeDistributionStatistics implements IModel {
    private count;
    private min;
    private max;
    private avg;
    private median;
    private stddev;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getMin(): number | null;
    setMin(min: number | null): this;
    withMin(min: number | null): this;
    getMax(): number | null;
    setMax(max: number | null): this;
    withMax(max: number | null): this;
    getAvg(): number | null;
    setAvg(avg: number | null): this;
    withAvg(avg: number | null): this;
    getMedian(): number | null;
    setMedian(median: number | null): this;
    withMedian(median: number | null): this;
    getStddev(): number | null;
    setStddev(stddev: number | null): this;
    withStddev(stddev: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelConsumeDistributionStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
