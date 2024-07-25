import IResult from '../../core/interface/IResult';
export default class RunVerifyTaskResult implements IResult {
    private contextStack;
    private statusCode;
    private result;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunVerifyTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
