import IResult from '../../core/interface/IResult';
export default class InvokeScriptResult implements IResult {
    private code;
    private result;
    private executeTime;
    private charged;
    private output;
    getCode(): number | null;
    setCode(code: number | null): this;
    withCode(code: number | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    getExecuteTime(): number | null;
    setExecuteTime(executeTime: number | null): this;
    withExecuteTime(executeTime: number | null): this;
    getCharged(): number | null;
    setCharged(charged: number | null): this;
    withCharged(charged: number | null): this;
    getOutput(): string[] | null;
    setOutput(output: string[] | null): this;
    withOutput(output: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InvokeScriptResult;
    toDict(): {
        [key: string]: any;
    };
}
