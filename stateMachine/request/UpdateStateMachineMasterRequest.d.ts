import IRequest from '../../core/interface/IRequest';
export default class UpdateStateMachineMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private mainStateMachineName;
    private payload;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getMainStateMachineName(): string | null;
    setMainStateMachineName(mainStateMachineName: string | null): this;
    withMainStateMachineName(mainStateMachineName: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStateMachineMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
