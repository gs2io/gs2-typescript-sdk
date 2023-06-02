import IModel from '../../core/interface/IModel';
import StaminaStaminaModelConsumeDistribution from './StaminaStaminaModelConsumeDistribution';
import StaminaStaminaModelRecoverDistribution from './StaminaStaminaModelRecoverDistribution';
export default class StaminaStaminaModelDistributions implements IModel {
    private consume;
    private recover;
    getConsume(): StaminaStaminaModelConsumeDistribution | null;
    setConsume(consume: StaminaStaminaModelConsumeDistribution | null): this;
    withConsume(consume: StaminaStaminaModelConsumeDistribution | null): this;
    getRecover(): StaminaStaminaModelRecoverDistribution | null;
    setRecover(recover: StaminaStaminaModelRecoverDistribution | null): this;
    withRecover(recover: StaminaStaminaModelRecoverDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
