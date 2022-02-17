import IModel from '../../core/interface/IModel';
export default class Threshold implements IModel {
    private metadata;
    private values;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getValues(): number[] | null;
    setValues(values: number[] | null): this;
    withValues(values: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Threshold | null;
    toDict(): {
        [key: string]: any;
    };
}
