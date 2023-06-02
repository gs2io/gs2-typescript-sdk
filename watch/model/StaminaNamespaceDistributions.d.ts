import IModel from '../../core/interface/IModel';
import StaminaNamespaceConsumeDistribution from './StaminaNamespaceConsumeDistribution';
import StaminaNamespaceRecoverDistribution from './StaminaNamespaceRecoverDistribution';
export default class StaminaNamespaceDistributions implements IModel {
    private consume;
    private recover;
    getConsume(): StaminaNamespaceConsumeDistribution | null;
    setConsume(consume: StaminaNamespaceConsumeDistribution | null): this;
    withConsume(consume: StaminaNamespaceConsumeDistribution | null): this;
    getRecover(): StaminaNamespaceRecoverDistribution | null;
    setRecover(recover: StaminaNamespaceRecoverDistribution | null): this;
    withRecover(recover: StaminaNamespaceRecoverDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
