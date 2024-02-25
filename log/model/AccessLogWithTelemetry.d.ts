import IModel from '../../core/interface/IModel';
export default class AccessLogWithTelemetry implements IModel {
    private timestamp;
    private sourceRequestId;
    private requestId;
    private duration;
    private service;
    private method;
    private userId;
    private request;
    private result;
    private status;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getSourceRequestId(): string | null;
    setSourceRequestId(sourceRequestId: string | null): this;
    withSourceRequestId(sourceRequestId: string | null): this;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getDuration(): number | null;
    setDuration(duration: number | null): this;
    withDuration(duration: number | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    getMethod(): string | null;
    setMethod(method: string | null): this;
    withMethod(method: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRequest(): string | null;
    setRequest(request: string | null): this;
    withRequest(request: string | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccessLogWithTelemetry | null;
    toDict(): {
        [key: string]: any;
    };
}
