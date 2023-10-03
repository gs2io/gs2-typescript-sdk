import IResult from '../../core/interface/IResult';
export default class VerifyRankByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRankByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
