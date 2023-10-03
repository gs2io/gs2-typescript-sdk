import IResult from '../../core/interface/IResult';
export default class VerifyEntryByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyEntryByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
