import IRequest from '../../core/interface/IRequest';
export default class CommitVoteRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private seasonName;
    private sessionName;
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
    static fromDict(data: {
        [key: string]: any;
    }): CommitVoteRequest;
    toDict(): {
        [key: string]: any;
    };
}
