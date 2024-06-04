import IResult from '../../core/interface/IResult';
export default class VerifyIncludeMemberResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeMemberResult;
    toDict(): {
        [key: string]: any;
    };
}
