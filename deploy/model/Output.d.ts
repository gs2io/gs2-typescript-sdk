import IModel from '@/gs2/core/interface/IModel';
export declare class Output implements IModel {
    private outputId;
    private name;
    private value;
    private createdAt;
    getOutputId(): string | null;
    setOutputId(outputId: string | null): this;
    withOutputId(outputId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getValue(): string | null;
    setValue(value: string | null): this;
    withValue(value: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Output | null;
    toDict(): {
        [key: string]: any;
    };
}
