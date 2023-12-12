import IModel from '../../core/interface/IModel';
export default class RandomUsed implements IModel {
    private category;
    private used;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    getUsed(): number | null;
    setUsed(used: number | null): this;
    withUsed(used: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomUsed | null;
    toDict(): {
        [key: string]: any;
    };
}
