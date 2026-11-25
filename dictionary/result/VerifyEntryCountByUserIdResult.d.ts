import IResult from '../../core/interface/IResult';
export default class VerifyEntryCountByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyEntryCountByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
