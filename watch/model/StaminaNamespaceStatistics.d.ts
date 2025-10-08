import IModel from '../../core/interface/IModel';
export default class StaminaNamespaceStatistics implements IModel {
    private consume;
    private recover;
    getConsume(): number | null;
    setConsume(consume: number | null): this;
    withConsume(consume: number | null): this;
    getRecover(): number | null;
    setRecover(recover: number | null): this;
    withRecover(recover: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
