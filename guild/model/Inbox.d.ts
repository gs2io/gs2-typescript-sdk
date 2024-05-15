import IModel from '../../core/interface/IModel';
export default class Inbox implements IModel {
    private inboxId;
    private guildName;
    private fromUserIds;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getGuildModelName(grn: string): string | null;
    static getGuildName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, guildModelName: string | null, guildName: string | null): string | null;
    getInboxId(): string | null;
    setInboxId(inboxId: string | null): this;
    withInboxId(inboxId: string | null): this;
    getGuildName(): string | null;
    setGuildName(guildName: string | null): this;
    withGuildName(guildName: string | null): this;
    getFromUserIds(): string[] | null;
    setFromUserIds(fromUserIds: string[] | null): this;
    withFromUserIds(fromUserIds: string[] | null): this;
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
    }): Inbox | null;
    toDict(): {
        [key: string]: any;
    };
}
