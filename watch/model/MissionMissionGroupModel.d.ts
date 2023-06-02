import IModel from '../../core/interface/IModel';
import MissionMissionGroupModelStatistics from './MissionMissionGroupModelStatistics';
import MissionMissionGroupModelDistributions from './MissionMissionGroupModelDistributions';
export default class MissionMissionGroupModel implements IModel {
    private missionGroupModelId;
    private missionGroupName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMissionGroupName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, missionGroupName: string | null): string | null;
    getMissionGroupModelId(): string | null;
    setMissionGroupModelId(missionGroupModelId: string | null): this;
    withMissionGroupModelId(missionGroupModelId: string | null): this;
    getMissionGroupName(): string | null;
    setMissionGroupName(missionGroupName: string | null): this;
    withMissionGroupName(missionGroupName: string | null): this;
    getStatistics(): MissionMissionGroupModelStatistics | null;
    setStatistics(statistics: MissionMissionGroupModelStatistics | null): this;
    withStatistics(statistics: MissionMissionGroupModelStatistics | null): this;
    getDistributions(): MissionMissionGroupModelDistributions | null;
    setDistributions(distributions: MissionMissionGroupModelDistributions | null): this;
    withDistributions(distributions: MissionMissionGroupModelDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModel | null;
    toDict(): {
        [key: string]: any;
    };
}
