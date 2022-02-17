import IModel from '../../core/interface/IModel';
export default class Complete implements IModel {
    private completeId;
    private userId;
    private missionGroupName;
    private completedMissionTaskNames;
    private receivedMissionTaskNames;
    private nextResetAt;
    private createdAt;
    private updatedAt;
    getCompleteId(): string | null;
    setCompleteId(completeId: string | null): this;
    withCompleteId(completeId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getMissionGroupName(): string | null;
    setMissionGroupName(missionGroupName: string | null): this;
    withMissionGroupName(missionGroupName: string | null): this;
    getCompletedMissionTaskNames(): string[] | null;
    setCompletedMissionTaskNames(completedMissionTaskNames: string[] | null): this;
    withCompletedMissionTaskNames(completedMissionTaskNames: string[] | null): this;
    getReceivedMissionTaskNames(): string[] | null;
    setReceivedMissionTaskNames(receivedMissionTaskNames: string[] | null): this;
    withReceivedMissionTaskNames(receivedMissionTaskNames: string[] | null): this;
    getNextResetAt(): number | null;
    setNextResetAt(nextResetAt: number | null): this;
    withNextResetAt(nextResetAt: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Complete | null;
    toDict(): {
        [key: string]: any;
    };
}
