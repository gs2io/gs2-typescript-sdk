import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitNamespaceDistributions implements IModel {
    private increase;
    getIncrease(): Gs2Watch.LimitNamespaceIncreaseDistribution | null;
    setIncrease(increase: Gs2Watch.LimitNamespaceIncreaseDistribution | null): this;
    withIncrease(increase: Gs2Watch.LimitNamespaceIncreaseDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
