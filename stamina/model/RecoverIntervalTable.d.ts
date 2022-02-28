import IModel from '../../core/interface/IModel';
export default class RecoverIntervalTable implements IModel {
    private recoverIntervalTableId;
    private name;
    private metadata;
    private experienceModelId;
    private values;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getRecoverIntervalTableName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, recoverIntervalTableName: string | null): string | null;
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
