import IRequest from '../../core/interface/IRequest';
export default class GetBallotRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private seasonName;
    private sessionName;
    private accessToken;
    private numberOfPlayer;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getSeasonName(): string | null;
    setSeasonName(seasonName: string | null): this;
    withSeasonName(seasonName: string | null): this;
    getSessionName(): string | null;
    setSessionName(sessionName: string | null): this;
    withSessionName(sessionName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getNumberOfPlayer(): number | null;
    setNumberOfPlayer(numberOfPlayer: number | null): this;
    withNumberOfPlayer(numberOfPlayer: number | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBallotRequest;
    toDict(): {
        [key: string]: any;
    };
}
