import IModel from './interface/IModel';
export default class VerifyActionResult implements IModel {
    private action;
    private verifyRequest;
    private statusCode;
    private verifyResult;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getVerifyRequest(): string | null;
    setVerifyRequest(verifyRequest: string | null): this;
    withVerifyRequest(verifyRequest: string | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getVerifyResult(): string | null;
    setVerifyResult(verifyResult: string | null): this;
    withVerifyResult(verifyResult: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyActionResult | null;
    toDict(): {
        [key: string]: any;
    };
}
