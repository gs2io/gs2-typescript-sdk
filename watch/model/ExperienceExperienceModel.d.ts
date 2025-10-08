import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
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
    getStatistics(): Gs2Watch.ExperienceExperienceModelStatistics | null;
    setStatistics(statistics: Gs2Watch.ExperienceExperienceModelStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExperienceExperienceModelStatistics | null): this;
    getDistributions(): Gs2Watch.ExperienceExperienceModelDistributions | null;
    setDistributions(distributions: Gs2Watch.ExperienceExperienceModelDistributions | null): this;
    withDistributions(distributions: Gs2Watch.ExperienceExperienceModelDistributions | null): this;
    getStatuses(): Gs2Watch.ExperienceStatus[] | null;
    setStatuses(statuses: Gs2Watch.ExperienceStatus[] | null): this;
    withStatuses(statuses: Gs2Watch.ExperienceStatus[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModel | null;
    toDict(): {
        [key: string]: any;
    };
}
