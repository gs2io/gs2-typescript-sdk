import IResult from '../../core/interface/IResult';
export default class RunStampSheetExpressResult implements IResult {
    private taskResults;
    private sheetResult;
    getTaskResults(): string[] | null;
    setTaskResults(taskResults: string[] | null): this;
    withTaskResults(taskResults: string[] | null): this;
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
