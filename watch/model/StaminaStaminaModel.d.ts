import IModel from '../../core/interface/IModel';
import StaminaStaminaModelStatistics from './StaminaStaminaModelStatistics';
import StaminaStaminaModelDistributions from './StaminaStaminaModelDistributions';
export default class StaminaStaminaModel implements IModel {
    private staminaModelId;
    private staminaName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getStaminaName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, staminaName: string | null): string | null;
    getStaminaModelId(): string | null;
    setStaminaModelId(staminaModelId: string | null): this;
    withStaminaModelId(staminaModelId: string | null): this;
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    getStatistics(): StaminaStaminaModelStatistics | null;
    setStatistics(statistics: StaminaStaminaModelStatistics | null): this;
    withStatistics(statistics: StaminaStaminaModelStatistics | null): this;
    getDistributions(): StaminaStaminaModelDistributions | null;
    setDistributions(distributions: StaminaStaminaModelDistributions | null): this;
    withDistributions(distributions: StaminaStaminaModelDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaStaminaModel | null;
    toDict(): {
        [key: string]: any;
    };
}
