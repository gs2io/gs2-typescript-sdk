import IModel from '../../core/interface/IModel';
export default class WebSocketSession implements IModel {
    private webSocketSessionId;
    private connectionId;
    private namespaceName;
    private userId;
    private createdAt;
    private updatedAt;
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
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WebSocketSession | null;
    toDict(): {
        [key: string]: any;
    };
}
