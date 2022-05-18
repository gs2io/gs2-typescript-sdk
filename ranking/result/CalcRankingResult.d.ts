import IResult from '../../core/interface/IResult';
export default class CalcRankingResult implements IResult {
    private processing;
    getProcessing(): boolean | null;
    setProcessing(processing: boolean | null): this;
    withProcessing(processing: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CalcRankingResult;
    toDict(): {
        [key: string]: any;
    };
}
