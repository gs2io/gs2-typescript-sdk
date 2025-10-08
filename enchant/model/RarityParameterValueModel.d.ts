import IModel from '../../core/interface/IModel';
export default class RarityParameterValueModel implements IModel {
    private name;
    private metadata;
    private resourceName;
    private resourceValue;
    private weight;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getResourceName(): string | null;
    setResourceName(resourceName: string | null): this;
    withResourceName(resourceName: string | null): this;
    getResourceValue(): number | null;
    setResourceValue(resourceValue: number | null): this;
    withResourceValue(resourceValue: number | null): this;
    getWeight(): number | null;
    setWeight(weight: number | null): this;
    withWeight(weight: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RarityParameterValueModel | null;
    toDict(): {
        [key: string]: any;
    };
}
