import IModel from '../../core/interface/IModel';
export default class Attribute implements IModel {
    private name;
    private value;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Attribute | null;
    toDict(): {
        [key: string]: any;
    };
}
