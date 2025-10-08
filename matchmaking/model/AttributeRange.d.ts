import IModel from '../../core/interface/IModel';
export default class AttributeRange implements IModel {
    private name;
    private min;
    private max;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMin(): number | null;
    setMin(min: number | null): this;
    withMin(min: number | null): this;
    getMax(): number | null;
    setMax(max: number | null): this;
    withMax(max: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AttributeRange | null;
    toDict(): {
        [key: string]: any;
    };
}
