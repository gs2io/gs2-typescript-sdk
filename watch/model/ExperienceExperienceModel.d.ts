import IModel from '../../core/interface/IModel';
import ExperienceExperienceModelStatistics from './ExperienceExperienceModelStatistics';
import ExperienceExperienceModelDistributions from './ExperienceExperienceModelDistributions';
import ExperienceStatus from './ExperienceStatus';
export default class ExperienceExperienceModel implements IModel {
    private experienceModelId;
    private experienceName;
    private statistics;
    private distributions;
    private statuses;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getExperienceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, experienceName: string | null): string | null;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getStatistics(): ExperienceExperienceModelStatistics | null;
    setStatistics(statistics: ExperienceExperienceModelStatistics | null): this;
    withStatistics(statistics: ExperienceExperienceModelStatistics | null): this;
    getDistributions(): ExperienceExperienceModelDistributions | null;
    setDistributions(distributions: ExperienceExperienceModelDistributions | null): this;
    withDistributions(distributions: ExperienceExperienceModelDistributions | null): this;
    getStatuses(): ExperienceStatus[] | null;
    setStatuses(statuses: ExperienceStatus[] | null): this;
    withStatuses(statuses: ExperienceStatus[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModel | null;
    toDict(): {
        [key: string]: any;
    };
}
