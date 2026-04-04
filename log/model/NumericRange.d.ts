import IModel from '../../core/interface/IModel';
export default class NumericRange implements IModel {
    private min;
    private max;
    getMin(): number | null;
    setMin(min: number | null): this;
    withMin(min: number | null): this;
    getMax(): number | null;
    setMax(max: number | null): this;
    withMax(max: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NumericRange | null;
    toDict(): {
        [key: string]: any;
    };
}
