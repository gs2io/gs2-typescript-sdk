import IModel from '../../core/interface/IModel';
import * as Gs2Exchange from '../../exchange/model';
export default class RateModel implements IModel {
    private rateModelId;
    private name;
    private metadata;
    private verifyActions;
    private consumeActions;
    private timingType;
    private lockTime;
    private acquireActions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getRateName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, rateName: string | null): string | null;
    getRateModelId(): string | null;
    setRateModelId(rateModelId: string | null): this;
    withRateModelId(rateModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getVerifyActions(): Gs2Exchange.VerifyAction[] | null;
    setVerifyActions(verifyActions: Gs2Exchange.VerifyAction[] | null): this;
    withVerifyActions(verifyActions: Gs2Exchange.VerifyAction[] | null): this;
    getConsumeActions(): Gs2Exchange.ConsumeAction[] | null;
    setConsumeActions(consumeActions: Gs2Exchange.ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: Gs2Exchange.ConsumeAction[] | null): this;
    getTimingType(): string | null;
    setTimingType(timingType: string | null): this;
    withTimingType(timingType: string | null): this;
    getLockTime(): number | null;
    setLockTime(lockTime: number | null): this;
    withLockTime(lockTime: number | null): this;
    getAcquireActions(): Gs2Exchange.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Exchange.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Exchange.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RateModel | null;
    toDict(): {
        [key: string]: any;
    };
}
