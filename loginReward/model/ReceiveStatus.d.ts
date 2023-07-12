import IModel from '../../core/interface/IModel';
export default class ReceiveStatus implements IModel {
    private receiveStatusId;
    private bonusModelName;
    private userId;
    private receivedSteps;
    private lastReceivedAt;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getBonusModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, bonusModelName: string | null): string | null;
    getReceiveStatusId(): string | null;
    setReceiveStatusId(receiveStatusId: string | null): this;
    withReceiveStatusId(receiveStatusId: string | null): this;
    getBonusModelName(): string | null;
    setBonusModelName(bonusModelName: string | null): this;
    withBonusModelName(bonusModelName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getReceivedSteps(): boolean[] | null;
    setReceivedSteps(receivedSteps: boolean[] | null): this;
    withReceivedSteps(receivedSteps: boolean[] | null): this;
    getLastReceivedAt(): number | null;
    setLastReceivedAt(lastReceivedAt: number | null): this;
    withLastReceivedAt(lastReceivedAt: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReceiveStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
