import IRequest from '../../core/interface/IRequest';
export default class GetMessageRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private roomName;
    private messageName;
    private password;
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
    getMessageName(): string | null;
    setMessageName(messageName: string | null): this;
    withMessageName(messageName: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMessageRequest;
    toDict(): {
        [key: string]: any;
    };
}
