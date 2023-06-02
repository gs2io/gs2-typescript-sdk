import IModel from '../../core/interface/IModel';
export default class MissionNamespaceStatistics implements IModel {
    private increase;
    private increaseAmount;
    private receive;
    getIncrease(): number | null;
    setIncrease(increase: number | null): this;
    withIncrease(increase: number | null): this;
    getIncreaseAmount(): number | null;
    setIncreaseAmount(increaseAmount: number | null): this;
    withIncreaseAmount(increaseAmount: number | null): this;
    getReceive(): number | null;
    setReceive(receive: number | null): this;
    withReceive(receive: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
