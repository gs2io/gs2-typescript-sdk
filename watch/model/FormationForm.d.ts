import IModel from '../../core/interface/IModel';
import FormationFormStatistics from './FormationFormStatistics';
import FormationFormDistributions from './FormationFormDistributions';
export default class FormationForm implements IModel {
    private formId;
    private index;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMoldModelName(grn: string): string | null;
    static getIndex(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, moldModelName: string | null, index: string | null): string | null;
    getFormId(): string | null;
    setFormId(formId: string | null): this;
    withFormId(formId: string | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    getStatistics(): FormationFormStatistics | null;
    setStatistics(statistics: FormationFormStatistics | null): this;
    withStatistics(statistics: FormationFormStatistics | null): this;
    getDistributions(): FormationFormDistributions | null;
    setDistributions(distributions: FormationFormDistributions | null): this;
    withDistributions(distributions: FormationFormDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationForm | null;
    toDict(): {
        [key: string]: any;
    };
}
