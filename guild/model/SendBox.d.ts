import IModel from '../../core/interface/IModel';
export default class SendBox implements IModel {
    private sendBoxId;
    private userId;
    private guildModelName;
    private targetGuildNames;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getGuildModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, guildModelName: string | null): string | null;
    getSendBoxId(): string | null;
    setSendBoxId(sendBoxId: string | null): this;
    withSendBoxId(sendBoxId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getTargetGuildNames(): string[] | null;
    setTargetGuildNames(targetGuildNames: string[] | null): this;
    withTargetGuildNames(targetGuildNames: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendBox | null;
    toDict(): {
        [key: string]: any;
    };
}
