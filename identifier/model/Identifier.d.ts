import IModel from '../../core/interface/IModel';
export default class Identifier implements IModel {
    private clientId;
    private userName;
    private clientSecret;
    private createdAt;
    private revision;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getClientId(): string | null;
    setClientId(clientId: string | null): this;
    withClientId(clientId: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getClientSecret(): string | null;
    setClientSecret(clientSecret: string | null): this;
    withClientSecret(clientSecret: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Identifier | null;
    toDict(): {
        [key: string]: any;
    };
}
