import IModel from '../../core/interface/IModel';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
export default class RateModel implements IModel {
    private rateModelId;
    private name;
    private metadata;
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
    getConsumeActions(): ConsumeAction[] | null;
    setConsumeActions(consumeActions: ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: ConsumeAction[] | null): this;
    getTimingType(): string | null;
    setTimingType(timingType: string | null): this;
    withTimingType(timingType: string | null): this;
    getLockTime(): number | null;
    setLockTime(lockTime: number | null): this;
    withLockTime(lockTime: number | null): this;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RateModel | null;
    toDict(): {
        [key: string]: any;
    };
}
