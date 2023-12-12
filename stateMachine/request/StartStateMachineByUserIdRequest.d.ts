import IRequest from '../../core/interface/IRequest';
export default class StartStateMachineByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private args;
    private enableSpeculativeExecution;
    private ttl;
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
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getEnableSpeculativeExecution(): string | null;
    setEnableSpeculativeExecution(enableSpeculativeExecution: string | null): this;
    withEnableSpeculativeExecution(enableSpeculativeExecution: string | null): this;
    getTtl(): number | null;
    setTtl(ttl: number | null): this;
    withTtl(ttl: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StartStateMachineByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
