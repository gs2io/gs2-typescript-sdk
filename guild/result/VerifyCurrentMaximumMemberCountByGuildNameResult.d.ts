import IResult from '../../core/interface/IResult';
export default class VerifyCurrentMaximumMemberCountByGuildNameResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCurrentMaximumMemberCountByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
