import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
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
    getStatistics(): Gs2Watch.FormationMoldStatistics | null;
    setStatistics(statistics: Gs2Watch.FormationMoldStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FormationMoldStatistics | null): this;
    getDistributions(): Gs2Watch.FormationMoldDistributions | null;
    setDistributions(distributions: Gs2Watch.FormationMoldDistributions | null): this;
    withDistributions(distributions: Gs2Watch.FormationMoldDistributions | null): this;
    getForms(): Gs2Watch.FormationForm[] | null;
    setForms(forms: Gs2Watch.FormationForm[] | null): this;
    withForms(forms: Gs2Watch.FormationForm[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMold | null;
    toDict(): {
        [key: string]: any;
    };
}
