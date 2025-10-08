import IModel from '../../core/interface/IModel';
import * as Gs2Grade from '../../grade/model';
export default class GradeModel implements IModel {
    private gradeModelId;
    private name;
    private metadata;
    private defaultGrades;
    private experienceModelId;
    private gradeEntries;
    private acquireActionRates;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getGradeName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, gradeName: string | null): string | null;
    getGradeModelId(): string | null;
    setGradeModelId(gradeModelId: string | null): this;
    withGradeModelId(gradeModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDefaultGrades(): Gs2Grade.DefaultGradeModel[] | null;
    setDefaultGrades(defaultGrades: Gs2Grade.DefaultGradeModel[] | null): this;
    withDefaultGrades(defaultGrades: Gs2Grade.DefaultGradeModel[] | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getGradeEntries(): Gs2Grade.GradeEntryModel[] | null;
    setGradeEntries(gradeEntries: Gs2Grade.GradeEntryModel[] | null): this;
    withGradeEntries(gradeEntries: Gs2Grade.GradeEntryModel[] | null): this;
    getAcquireActionRates(): Gs2Grade.AcquireActionRate[] | null;
    setAcquireActionRates(acquireActionRates: Gs2Grade.AcquireActionRate[] | null): this;
    withAcquireActionRates(acquireActionRates: Gs2Grade.AcquireActionRate[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GradeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
