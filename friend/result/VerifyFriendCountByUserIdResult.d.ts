import IResult from '../../core/interface/IResult';
export default class VerifyFriendCountByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFriendCountByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
