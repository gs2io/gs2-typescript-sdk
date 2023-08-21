import IModel from '../../core/interface/IModel';
export default class User implements IModel {
    private userId;
    private name;
    private description;
    private createdAt;
    private updatedAt;
    private revision;
    static getOwnerId(grn: string): string | null;
    static getUserName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(ownerId: string | null, userName: string | null): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
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
    }): User | null;
    toDict(): {
        [key: string]: any;
    };
}
