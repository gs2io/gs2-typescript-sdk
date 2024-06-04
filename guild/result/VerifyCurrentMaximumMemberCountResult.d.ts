import IResult from '../../core/interface/IResult';
export default class VerifyCurrentMaximumMemberCountResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCurrentMaximumMemberCountResult;
    toDict(): {
        [key: string]: any;
    };
}
