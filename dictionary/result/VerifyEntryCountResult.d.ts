import IResult from '../../core/interface/IResult';
export default class VerifyEntryCountResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyEntryCountResult;
    toDict(): {
        [key: string]: any;
    };
}
