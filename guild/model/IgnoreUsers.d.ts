import IModel from '../../core/interface/IModel';
import IgnoreUser from './IgnoreUser';
export default class IgnoreUsers implements IModel {
    private ignoreUsersId;
    private guildModelName;
    private users;
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
    getIgnoreUsersId(): string | null;
    setIgnoreUsersId(ignoreUsersId: string | null): this;
    withIgnoreUsersId(ignoreUsersId: string | null): this;
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getUsers(): IgnoreUser[] | null;
    setUsers(users: IgnoreUser[] | null): this;
    withUsers(users: IgnoreUser[] | null): this;
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
    }): IgnoreUsers | null;
    toDict(): {
        [key: string]: any;
    };
}
