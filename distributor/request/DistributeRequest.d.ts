import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class DistributeRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private distributorName;
    private userId;
    private distributeResource;
    private timeOffsetToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDistributorName(): string | null;
    setDistributorName(distributorName: string | null): this;
    withDistributorName(distributorName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDistributeResource(): Gs2Distributor.DistributeResource | null;
    setDistributeResource(distributeResource: Gs2Distributor.DistributeResource | null): this;
    withDistributeResource(distributeResource: Gs2Distributor.DistributeResource | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DistributeRequest;
    toDict(): {
        [key: string]: any;
    };
}
