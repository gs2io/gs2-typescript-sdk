import IModel from '../../core/interface/IModel';
export default class RecoverIntervalTable implements IModel {
    private recoverIntervalTableId;
    private name;
    private metadata;
    private experienceModelId;
    private values;
    getRecoverIntervalTableId(): string | null;
    setRecoverIntervalTableId(recoverIntervalTableId: string | null): this;
    withRecoverIntervalTableId(recoverIntervalTableId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getValues(): number[] | null;
    setValues(values: number[] | null): this;
    withValues(values: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RecoverIntervalTable | null;
    toDict(): {
        [key: string]: any;
    };
}
