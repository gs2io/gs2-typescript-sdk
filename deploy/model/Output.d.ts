import IModel from '../../core/interface/IModel';
export default class Output implements IModel {
    private outputId;
    private name;
    private value;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getStackName(grn: string): string | null;
    static getOutputName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, stackName: string | null, outputName: string | null): string | null;
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
