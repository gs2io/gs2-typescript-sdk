import IModel from '@/gs2/core/interface/IModel';
export declare class OutputField implements IModel {
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
