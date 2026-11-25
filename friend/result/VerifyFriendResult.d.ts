import IResult from '../../core/interface/IResult';
export default class VerifyFriendResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFriendResult;
    toDict(): {
        [key: string]: any;
    };
}
