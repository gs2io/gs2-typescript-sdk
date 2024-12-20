import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class StaminaNamespaceDistributions implements IModel {
    private consume;
    private recover;
    getConsume(): Gs2Watch.StaminaNamespaceConsumeDistribution | null;
    setConsume(consume: Gs2Watch.StaminaNamespaceConsumeDistribution | null): this;
    withConsume(consume: Gs2Watch.StaminaNamespaceConsumeDistribution | null): this;
    getRecover(): Gs2Watch.StaminaNamespaceRecoverDistribution | null;
    setRecover(recover: Gs2Watch.StaminaNamespaceRecoverDistribution | null): this;
    withRecover(recover: Gs2Watch.StaminaNamespaceRecoverDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
