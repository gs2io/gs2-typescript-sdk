import IResult from '../../core/interface/IResult';
export default class VerifyRankCapResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRankCapResult;
    toDict(): {
        [key: string]: any;
    };
}
