import IModel from '../../core/interface/IModel';
export default class Microservice implements IModel {
    private name;
    private version;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getVersion(): string | null;
    setVersion(version: string | null): this;
    withVersion(version: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Microservice | null;
    toDict(): {
        [key: string]: any;
    };
}
