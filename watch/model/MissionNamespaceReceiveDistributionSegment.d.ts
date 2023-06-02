import IModel from '../../core/interface/IModel';
export default class MissionNamespaceReceiveDistributionSegment implements IModel {
    private missionGroupName;
    private count;
    getMissionGroupName(): string | null;
    setMissionGroupName(missionGroupName: string | null): this;
    withMissionGroupName(missionGroupName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceReceiveDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
