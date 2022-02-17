import IResult from '../../core/interface/IResult';
export default class RunStampSheetResult implements IResult {
    private result;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
