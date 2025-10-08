import IModel from '../../core/interface/IModel';
export default class StaminaStaminaModelStatistics implements IModel {
    private consume;
    private consumeAmount;
    private recover;
    private recoverAmount;
    getConsume(): number | null;
    setConsume(consume: number | null): this;
    withConsume(consume: number | null): this;
    getConsumeAmount(): number | null;
    setConsumeAmount(consumeAmount: number | null): this;
    withConsumeAmount(consumeAmount: number | null): this;
    getRecover(): number | null;
    setRecover(recover: number | null): this;
    withRecover(recover: number | null): this;
    getRecoverAmount(): number | null;
    setRecoverAmount(recoverAmount: number | null): this;
    withRecoverAmount(recoverAmount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
