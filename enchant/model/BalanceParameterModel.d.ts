import IModel from '../../core/interface/IModel';
import * as Gs2Enchant from '../../enchant/model';
export default class BalanceParameterModel implements IModel {
    private balanceParameterModelId;
    private name;
    private metadata;
    private totalValue;
    private initialValueStrategy;
    private parameters;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getParameterName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, parameterName: string | null): string | null;
    getBalanceParameterModelId(): string | null;
    setBalanceParameterModelId(balanceParameterModelId: string | null): this;
    withBalanceParameterModelId(balanceParameterModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getTotalValue(): number | null;
    setTotalValue(totalValue: number | null): this;
    withTotalValue(totalValue: number | null): this;
    getInitialValueStrategy(): string | null;
    setInitialValueStrategy(initialValueStrategy: string | null): this;
    withInitialValueStrategy(initialValueStrategy: string | null): this;
    getParameters(): Gs2Enchant.BalanceParameterValueModel[] | null;
    setParameters(parameters: Gs2Enchant.BalanceParameterValueModel[] | null): this;
    withParameters(parameters: Gs2Enchant.BalanceParameterValueModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BalanceParameterModel | null;
    toDict(): {
        [key: string]: any;
    };
}
