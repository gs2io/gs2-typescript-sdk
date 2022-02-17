import IModel from '../../core/interface/IModel';
export default class OutputField implements IModel {
    private name;
    private fieldName;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getFieldName(): string | null;
    setFieldName(fieldName: string | null): this;
    withFieldName(fieldName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): OutputField | null;
    toDict(): {
        [key: string]: any;
    };
}
