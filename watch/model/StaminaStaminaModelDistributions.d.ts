import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class StaminaStaminaModelDistributions implements IModel {
    private consume;
    private recover;
    getConsume(): Gs2Watch.StaminaStaminaModelConsumeDistribution | null;
    setConsume(consume: Gs2Watch.StaminaStaminaModelConsumeDistribution | null): this;
    withConsume(consume: Gs2Watch.StaminaStaminaModelConsumeDistribution | null): this;
    getRecover(): Gs2Watch.StaminaStaminaModelRecoverDistribution | null;
    setRecover(recover: Gs2Watch.StaminaStaminaModelRecoverDistribution | null): this;
    withRecover(recover: Gs2Watch.StaminaStaminaModelRecoverDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
