import IModel from '../../core/interface/IModel';
export default class MissionMissionTaskModel implements IModel {
    private missionTaskModelId;
    private missionTaskName;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMissionGroupName(grn: string): string | null;
    static getMissionTaskName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, missionGroupName: string | null, missionTaskName: string | null): string | null;
    getMissionTaskModelId(): string | null;
    setMissionTaskModelId(missionTaskModelId: string | null): this;
    withMissionTaskModelId(missionTaskModelId: string | null): this;
    getMissionTaskName(): string | null;
    setMissionTaskName(missionTaskName: string | null): this;
    withMissionTaskName(missionTaskName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionTaskModel | null;
    toDict(): {
        [key: string]: any;
    };
}
