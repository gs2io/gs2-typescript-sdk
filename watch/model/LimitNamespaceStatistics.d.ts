import IModel from '../../core/interface/IModel';
export default class LimitNamespaceStatistics implements IModel {
    private increase;
    getIncrease(): number | null;
    setIncrease(increase: number | null): this;
    withIncrease(increase: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
