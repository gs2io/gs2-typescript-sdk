import IRequest from '../../core/interface/IRequest';
export default class PostByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private userId;
    private category;
    private metadata;
    private password;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRoomName(): string | null;
    setRoomName(roomName: string | null): this;
    withRoomName(roomName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PostByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}