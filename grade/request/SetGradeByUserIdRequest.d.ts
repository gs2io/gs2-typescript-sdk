import IRequest from '../../core/interface/IRequest';
export default class SetGradeByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private gradeName;
    private propertyId;
    private gradeValue;
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
    getGradeName(): string | null;
    setGradeName(gradeName: string | null): this;
    withGradeName(gradeName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getGradeValue(): number | null;
    setGradeValue(gradeValue: number | null): this;
    withGradeValue(gradeValue: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetGradeByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
