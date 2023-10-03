import IResult from '../../core/interface/IResult';
export default class VerifyRankResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRankResult;
    toDict(): {
        [key: string]: any;
    };
}
