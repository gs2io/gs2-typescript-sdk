import IModel from '../../core/interface/IModel';
export default class MissionMissionGroupModelReceiveDistributionSegment implements IModel {
    private missionTaskName;
    private count;
    getMissionTaskName(): string | null;
    setMissionTaskName(missionTaskName: string | null): this;
    withMissionTaskName(missionTaskName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModelReceiveDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
