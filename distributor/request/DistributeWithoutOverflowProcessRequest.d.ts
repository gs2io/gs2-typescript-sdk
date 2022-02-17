import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class DistributeWithoutOverflowProcessRequest implements IRequest {
    private requestId;
    private contextStack;
    private userId;
    private distributeResource;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDistributeResource(): Gs2Distributor.DistributeResource | null;
    setDistributeResource(distributeResource: Gs2Distributor.DistributeResource | null): this;
    withDistributeResource(distributeResource: Gs2Distributor.DistributeResource | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DistributeWithoutOverflowProcessRequest;
    toDict(): {
        [key: string]: any;
    };
}
