import IResult from '../../core/interface/IResult';
export default class VerifyEntryResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyEntryResult;
    toDict(): {
        [key: string]: any;
    };
}
