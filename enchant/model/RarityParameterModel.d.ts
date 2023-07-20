import IModel from '../../core/interface/IModel';
import RarityParameterCountModel from './RarityParameterCountModel';
import RarityParameterValueModel from './RarityParameterValueModel';
export default class RarityParameterModel implements IModel {
    private rarityParameterModelId;
    private name;
    private metadata;
    private maximumParameterCount;
    private parameterCounts;
    private parameters;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getParameterName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, parameterName: string | null): string | null;
    getRarityParameterModelId(): string | null;
    setRarityParameterModelId(rarityParameterModelId: string | null): this;
    withRarityParameterModelId(rarityParameterModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getMaximumParameterCount(): number | null;
    setMaximumParameterCount(maximumParameterCount: number | null): this;
    withMaximumParameterCount(maximumParameterCount: number | null): this;
    getParameterCounts(): RarityParameterCountModel[] | null;
    setParameterCounts(parameterCounts: RarityParameterCountModel[] | null): this;
    withParameterCounts(parameterCounts: RarityParameterCountModel[] | null): this;
    getParameters(): RarityParameterValueModel[] | null;
    setParameters(parameters: RarityParameterValueModel[] | null): this;
    withParameters(parameters: RarityParameterValueModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RarityParameterModel | null;
    toDict(): {
        [key: string]: any;
    };
}
