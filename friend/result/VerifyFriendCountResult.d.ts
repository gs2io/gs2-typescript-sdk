import IResult from '../../core/interface/IResult';
export default class VerifyFriendCountResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFriendCountResult;
    toDict(): {
        [key: string]: any;
    };
}
