import IRequest from '../../core/interface/IRequest';
import * as Gs2Matchmaking from '../model';
export default class UpdateGatheringByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private gatheringName;
    private userId;
    private attributeRanges;
    private timeOffsetToken;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getGatheringName(): string | null;
    setGatheringName(gatheringName: string | null): this;
    withGatheringName(gatheringName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAttributeRanges(): Gs2Matchmaking.AttributeRange[] | null;
    setAttributeRanges(attributeRanges: Gs2Matchmaking.AttributeRange[] | null): this;
    withAttributeRanges(attributeRanges: Gs2Matchmaking.AttributeRange[] | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateGatheringByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
