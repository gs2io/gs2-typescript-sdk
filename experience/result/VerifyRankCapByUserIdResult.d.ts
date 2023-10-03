import IResult from '../../core/interface/IResult';
export default class VerifyRankCapByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRankCapByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
