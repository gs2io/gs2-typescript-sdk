import IModel from '../../core/interface/IModel';
export default class MatchSession implements IModel {
    private sessionId;
    private name;
    private createdAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getSessionName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, sessionName: string | null): string | null;
    getSessionId(): string | null;
    setSessionId(sessionId: string | null): this;
    withSessionId(sessionId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchSession | null;
    toDict(): {
        [key: string]: any;
    };
}
