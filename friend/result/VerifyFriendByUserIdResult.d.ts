import IResult from '../../core/interface/IResult';
export default class VerifyFriendByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFriendByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
