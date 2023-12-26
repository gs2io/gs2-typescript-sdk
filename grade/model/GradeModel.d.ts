import IModel from '../../core/interface/IModel';
import DefaultGradeModel from './DefaultGradeModel';
import GradeEntryModel from './GradeEntryModel';
import AcquireActionRate from './AcquireActionRate';
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
    getDefaultGrades(): DefaultGradeModel[] | null;
    setDefaultGrades(defaultGrades: DefaultGradeModel[] | null): this;
    withDefaultGrades(defaultGrades: DefaultGradeModel[] | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getGradeEntries(): GradeEntryModel[] | null;
    setGradeEntries(gradeEntries: GradeEntryModel[] | null): this;
    withGradeEntries(gradeEntries: GradeEntryModel[] | null): this;
    getAcquireActionRates(): AcquireActionRate[] | null;
    setAcquireActionRates(acquireActionRates: AcquireActionRate[] | null): this;
    withAcquireActionRates(acquireActionRates: AcquireActionRate[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GradeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
