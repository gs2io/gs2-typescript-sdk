import IModel from '../../core/interface/IModel';
export default class BatchResultPayload implements IModel {
    private requestId;
    private statusCode;
    private resultPayload;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getResultPayload(): string | null;
    setResultPayload(resultPayload: string | null): this;
    withResultPayload(resultPayload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchResultPayload | null;
    toDict(): {
        [key: string]: any;
    };
}
