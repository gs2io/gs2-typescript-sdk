import IModel from '../../core/interface/IModel';
import FormationMoldStatistics from './FormationMoldStatistics';
import FormationMoldDistributions from './FormationMoldDistributions';
import FormationForm from './FormationForm';
export default class FormationMold implements IModel {
    private moldId;
    private moldModelName;
    private statistics;
    private distributions;
    private forms;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMoldModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, moldModelName: string | null): string | null;
    getMoldId(): string | null;
    setMoldId(moldId: string | null): this;
    withMoldId(moldId: string | null): this;
    getMoldModelName(): string | null;
    setMoldModelName(moldModelName: string | null): this;
    withMoldModelName(moldModelName: string | null): this;
    getStatistics(): FormationMoldStatistics | null;
    setStatistics(statistics: FormationMoldStatistics | null): this;
    withStatistics(statistics: FormationMoldStatistics | null): this;
    getDistributions(): FormationMoldDistributions | null;
    setDistributions(distributions: FormationMoldDistributions | null): this;
    withDistributions(distributions: FormationMoldDistributions | null): this;
    getForms(): FormationForm[] | null;
    setForms(forms: FormationForm[] | null): this;
    withForms(forms: FormationForm[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMold | null;
    toDict(): {
        [key: string]: any;
    };
}
