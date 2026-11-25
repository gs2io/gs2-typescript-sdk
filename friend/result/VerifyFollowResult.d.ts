import IResult from '../../core/interface/IResult';
export default class VerifyFollowResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFollowResult;
    toDict(): {
        [key: string]: any;
    };
}
