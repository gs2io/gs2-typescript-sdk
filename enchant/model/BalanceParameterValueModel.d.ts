import IModel from '../../core/interface/IModel';
export default class BalanceParameterValueModel implements IModel {
    private name;
    private metadata;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BalanceParameterValueModel | null;
    toDict(): {
        [key: string]: any;
    };
}
