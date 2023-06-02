import IModel from '../../core/interface/IModel';
import MissionNamespaceIncreaseDistribution from './MissionNamespaceIncreaseDistribution';
import MissionNamespaceIncreaseAmountDistribution from './MissionNamespaceIncreaseAmountDistribution';
import MissionNamespaceReceiveDistribution from './MissionNamespaceReceiveDistribution';
export default class MissionNamespaceDistributions implements IModel {
    private increase;
    private increaseAmount;
    private receive;
    getIncrease(): MissionNamespaceIncreaseDistribution | null;
    setIncrease(increase: MissionNamespaceIncreaseDistribution | null): this;
    withIncrease(increase: MissionNamespaceIncreaseDistribution | null): this;
    getIncreaseAmount(): MissionNamespaceIncreaseAmountDistribution | null;
    setIncreaseAmount(increaseAmount: MissionNamespaceIncreaseAmountDistribution | null): this;
    withIncreaseAmount(increaseAmount: MissionNamespaceIncreaseAmountDistribution | null): this;
    getReceive(): MissionNamespaceReceiveDistribution | null;
    setReceive(receive: MissionNamespaceReceiveDistribution | null): this;
    withReceive(receive: MissionNamespaceReceiveDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
