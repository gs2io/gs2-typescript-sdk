import IRequest from '../../core/interface/IRequest';
export default class SetExperienceByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private experienceName;
    private propertyId;
    private experienceValue;
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
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getExperienceValue(): number | null;
    setExperienceValue(experienceValue: number | null): this;
    withExperienceValue(experienceValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetExperienceByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}