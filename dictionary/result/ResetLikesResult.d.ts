import IResult from '../../core/interface/IResult';
export default class ResetLikesResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetLikesResult;
    toDict(): {
        [key: string]: any;
    };
}
