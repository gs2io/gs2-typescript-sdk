import IResult from '../../core/interface/IResult';
export default class RunStampTaskResult implements IResult {
    private contextStack;
    private result;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
