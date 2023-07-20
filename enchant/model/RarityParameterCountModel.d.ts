import IModel from '../../core/interface/IModel';
export default class RarityParameterCountModel implements IModel {
    private count;
    private weight;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getWeight(): number | null;
    setWeight(weight: number | null): this;
    withWeight(weight: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RarityParameterCountModel | null;
    toDict(): {
        [key: string]: any;
    };
}
