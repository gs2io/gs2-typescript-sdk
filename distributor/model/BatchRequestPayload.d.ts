import IModel from '../../core/interface/IModel';
export default class BatchRequestPayload implements IModel {
    private requestId;
    private service;
    private methodName;
    private parameter;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    getMethodName(): string | null;
    setMethodName(methodName: string | null): this;
    withMethodName(methodName: string | null): this;
    getParameter(): string | null;
    setParameter(parameter: string | null): this;
    withParameter(parameter: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchRequestPayload | null;
    toDict(): {
        [key: string]: any;
    };
}
