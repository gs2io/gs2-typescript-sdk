import IResult from '../../core/interface/IResult';
export default class VerifyIncludeMemberByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeMemberByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
