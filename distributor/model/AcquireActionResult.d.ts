import IModel from '../../core/interface/IModel';
export default class AcquireActionResult implements IModel {
    private action;
    private acquireRequest;
    private statusCode;
    private acquireResult;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getAcquireRequest(): string | null;
    setAcquireRequest(acquireRequest: string | null): this;
    withAcquireRequest(acquireRequest: string | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getAcquireResult(): string | null;
    setAcquireResult(acquireResult: string | null): this;
    withAcquireResult(acquireResult: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionResult | null;
    toDict(): {
        [key: string]: any;
    };
}
