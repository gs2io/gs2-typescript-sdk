import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionCounter implements IModel {
    private counterId;
    private counterName;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMissionGroupName(grn: string): string | null;
    static getCounterName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, missionGroupName: string | null, counterName: string | null): string | null;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getDistributions(): Gs2Watch.MissionCounterDistributions | null;
    setDistributions(distributions: Gs2Watch.MissionCounterDistributions | null): this;
    withDistributions(distributions: Gs2Watch.MissionCounterDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionCounter | null;
    toDict(): {
        [key: string]: any;
    };
}
