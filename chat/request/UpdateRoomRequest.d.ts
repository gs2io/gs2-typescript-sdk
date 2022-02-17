import IRequest from '../../core/interface/IRequest';
export default class UpdateRoomRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private metadata;
    private password;
    private whiteListUserIds;
    private accessToken;
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
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getWhiteListUserIds(): string[] | null;
    setWhiteListUserIds(whiteListUserIds: string[] | null): this;
    withWhiteListUserIds(whiteListUserIds: string[] | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateRoomRequest;
    toDict(): {
        [key: string]: any;
    };
}
