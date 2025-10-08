import IRequest from '../../core/interface/IRequest';
export default class CommitVoteRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private ratingName;
    private gatheringName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRatingName(): string | null;
    setRatingName(ratingName: string | null): this;
    withRatingName(ratingName: string | null): this;
    getGatheringName(): string | null;
    setGatheringName(gatheringName: string | null): this;
    withGatheringName(gatheringName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CommitVoteRequest;
    toDict(): {
        [key: string]: any;
    };
}
