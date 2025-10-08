import IResult from '../../core/interface/IResult';
export default class ResetLikesByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetLikesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
