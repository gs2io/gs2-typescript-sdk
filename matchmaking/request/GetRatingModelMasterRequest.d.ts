import IRequest from '../../core/interface/IRequest';
export default class GetRatingModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private ratingName;
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
    static fromDict(data: {
        [key: string]: any;
    }): GetRatingModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
