import IResult from '../../core/interface/IResult';
export default class RunStampSheetWithoutNamespaceResult implements IResult {
    private statusCode;
    private result;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunStampSheetWithoutNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
