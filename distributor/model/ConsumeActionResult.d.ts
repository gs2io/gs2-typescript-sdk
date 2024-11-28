import IModel from '../../core/interface/IModel';
export default class ConsumeActionResult implements IModel {
    private action;
    private consumeRequest;
    private statusCode;
    private consumeResult;
    getAction(): string | null;
    setAction(action: string | null): this;
    withAction(action: string | null): this;
    getConsumeRequest(): string | null;
    setConsumeRequest(consumeRequest: string | null): this;
    withConsumeRequest(consumeRequest: string | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getConsumeResult(): string | null;
    setConsumeResult(consumeResult: string | null): this;
    withConsumeResult(consumeResult: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeActionResult | null;
    toDict(): {
        [key: string]: any;
    };
}
