import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionNamespaceDistributions implements IModel {
    private increase;
    private increaseAmount;
    private receive;
    getIncrease(): Gs2Watch.MissionNamespaceIncreaseDistribution | null;
    setIncrease(increase: Gs2Watch.MissionNamespaceIncreaseDistribution | null): this;
    withIncrease(increase: Gs2Watch.MissionNamespaceIncreaseDistribution | null): this;
    getIncreaseAmount(): Gs2Watch.MissionNamespaceIncreaseAmountDistribution | null;
    setIncreaseAmount(increaseAmount: Gs2Watch.MissionNamespaceIncreaseAmountDistribution | null): this;
    withIncreaseAmount(increaseAmount: Gs2Watch.MissionNamespaceIncreaseAmountDistribution | null): this;
    getReceive(): Gs2Watch.MissionNamespaceReceiveDistribution | null;
    setReceive(receive: Gs2Watch.MissionNamespaceReceiveDistribution | null): this;
    withReceive(receive: Gs2Watch.MissionNamespaceReceiveDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
