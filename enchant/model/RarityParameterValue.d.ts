import IModel from '../../core/interface/IModel';
export default class RarityParameterValue implements IModel {
    private name;
    private resourceName;
    private resourceValue;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getResourceName(): string | null;
    setResourceName(resourceName: string | null): this;
    withResourceName(resourceName: string | null): this;
    getResourceValue(): number | null;
    setResourceValue(resourceValue: number | null): this;
    withResourceValue(resourceValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RarityParameterValue | null;
    toDict(): {
        [key: string]: any;
    };
}
