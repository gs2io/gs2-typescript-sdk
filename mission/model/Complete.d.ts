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
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getMissionGroupName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, missionGroupName: string | null): string | null;
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