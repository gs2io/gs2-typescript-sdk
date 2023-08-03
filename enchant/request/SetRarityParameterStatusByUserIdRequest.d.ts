import IRequest from '../../core/interface/IRequest';
import * as Gs2Enchant from '../model';
export default class SetRarityParameterStatusByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private parameterName;
    private propertyId;
    private parameterValues;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getParameterName(): string | null;
    setParameterName(parameterName: string | null): this;
    withParameterName(parameterName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getParameterValues(): Gs2Enchant.RarityParameterValue[] | null;
    setParameterValues(parameterValues: Gs2Enchant.RarityParameterValue[] | null): this;
    withParameterValues(parameterValues: Gs2Enchant.RarityParameterValue[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetRarityParameterStatusByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
