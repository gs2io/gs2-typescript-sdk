import IModel from '../../core/interface/IModel';
import LimitNamespaceIncreaseDistribution from './LimitNamespaceIncreaseDistribution';
export default class LimitNamespaceDistributions implements IModel {
    private increase;
    getIncrease(): LimitNamespaceIncreaseDistribution | null;
    setIncrease(increase: LimitNamespaceIncreaseDistribution | null): this;
    withIncrease(increase: LimitNamespaceIncreaseDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
