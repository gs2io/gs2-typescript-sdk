import IResult from '../../core/interface/IResult';
export default class RunStampSheetExpressResult implements IResult {
    private verifyTaskResultCodes;
    private verifyTaskResults;
    private taskResultCodes;
    private taskResults;
    private sheetResultCode;
    private sheetResult;
    getVerifyTaskResultCodes(): number[] | null;
    setVerifyTaskResultCodes(verifyTaskResultCodes: number[] | null): this;
    withVerifyTaskResultCodes(verifyTaskResultCodes: number[] | null): this;
    getVerifyTaskResults(): string[] | null;
    setVerifyTaskResults(verifyTaskResults: string[] | null): this;
    withVerifyTaskResults(verifyTaskResults: string[] | null): this;
    getTaskResultCodes(): number[] | null;
    setTaskResultCodes(taskResultCodes: number[] | null): this;
    withTaskResultCodes(taskResultCodes: number[] | null): this;
    getTaskResults(): string[] | null;
    setTaskResults(taskResults: string[] | null): this;
    withTaskResults(taskResults: string[] | null): this;
    getSheetResultCode(): number | null;
    setSheetResultCode(sheetResultCode: number | null): this;
    withSheetResultCode(sheetResultCode: number | null): this;
    getSheetResult(): string | null;
    setSheetResult(sheetResult: string | null): this;
    withSheetResult(sheetResult: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunStampSheetExpressResult;
    toDict(): {
        [key: string]: any;
    };
}
