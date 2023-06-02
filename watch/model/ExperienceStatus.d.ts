import IModel from '../../core/interface/IModel';
import ExperienceStatusDistributions from './ExperienceStatusDistributions';
export default class ExperienceStatus implements IModel {
    private statusId;
    private experienceName;
    private propertyId;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getExperienceName(grn: string): string | null;
    static getPropertyId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, experienceName: string | null, propertyId: string | null): string | null;
    getStatusId(): string | null;
    setStatusId(statusId: string | null): this;
    withStatusId(statusId: string | null): this;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getDistributions(): ExperienceStatusDistributions | null;
    setDistributions(distributions: ExperienceStatusDistributions | null): this;
    withDistributions(distributions: ExperienceStatusDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
