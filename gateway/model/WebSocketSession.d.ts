import IModel from '../../core/interface/IModel';
export default class WebSocketSession implements IModel {
    private webSocketSessionId;
    private connectionId;
    private namespaceName;
    private userId;
    private sessionId;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getConnectionId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, connectionId: string | null): string | null;
    getWebSocketSessionId(): string | null;
    setWebSocketSessionId(webSocketSessionId: string | null): this;
    withWebSocketSessionId(webSocketSessionId: string | null): this;
    getConnectionId(): string | null;
    setConnectionId(connectionId: string | null): this;
    withConnectionId(connectionId: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getSessionId(): string | null;
    setSessionId(sessionId: string | null): this;
    withSessionId(sessionId: string | null): this;
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
    }): WebSocketSession | null;
    toDict(): {
        [key: string]: any;
    };
}
