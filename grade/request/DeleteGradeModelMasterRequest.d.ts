import IRequest from '../../core/interface/IRequest';
export default class DeleteGradeModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private gradeName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getGradeName(): string | null;
    setGradeName(gradeName: string | null): this;
    withGradeName(gradeName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteGradeModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
