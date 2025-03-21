import IModel from '../../core/interface/IModel';
import * as Gs2Exchange from '../../exchange/model';
export default class IncrementalRateModel implements IModel {
    private incrementalRateModelId;
    private name;
    private metadata;
    private consumeAction;
    private calculateType;
    private baseValue;
    private coefficientValue;
    private calculateScriptId;
    private exchangeCountId;
    private maximumExchangeCount;
    private acquireActions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getRateName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, rateName: string | null): string | null;
    getIncrementalRateModelId(): string | null;
    setIncrementalRateModelId(incrementalRateModelId: string | null): this;
    withIncrementalRateModelId(incrementalRateModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getConsumeAction(): Gs2Exchange.ConsumeAction | null;
    setConsumeAction(consumeAction: Gs2Exchange.ConsumeAction | null): this;
    withConsumeAction(consumeAction: Gs2Exchange.ConsumeAction | null): this;
    getCalculateType(): string | null;
    setCalculateType(calculateType: string | null): this;
    withCalculateType(calculateType: string | null): this;
    getBaseValue(): number | null;
    setBaseValue(baseValue: number | null): this;
    withBaseValue(baseValue: number | null): this;
    getCoefficientValue(): number | null;
    setCoefficientValue(coefficientValue: number | null): this;
    withCoefficientValue(coefficientValue: number | null): this;
    getCalculateScriptId(): string | null;
    setCalculateScriptId(calculateScriptId: string | null): this;
    withCalculateScriptId(calculateScriptId: string | null): this;
    getExchangeCountId(): string | null;
    setExchangeCountId(exchangeCountId: string | null): this;
    withExchangeCountId(exchangeCountId: string | null): this;
    getMaximumExchangeCount(): number | null;
    setMaximumExchangeCount(maximumExchangeCount: number | null): this;
    withMaximumExchangeCount(maximumExchangeCount: number | null): this;
    getAcquireActions(): Gs2Exchange.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Exchange.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Exchange.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IncrementalRateModel | null;
    toDict(): {
        [key: string]: any;
    };
}
