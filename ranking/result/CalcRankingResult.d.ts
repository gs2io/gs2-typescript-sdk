import IResult from '../../core/interface/IResult';
export default class CalcRankingResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): CalcRankingResult;
    toDict(): {
        [key: string]: any;
    };
}
