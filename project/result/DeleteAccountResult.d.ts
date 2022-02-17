import IResult from '../../core/interface/IResult';
export default class DeleteAccountResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): DeleteAccountResult;
    toDict(): {
        [key: string]: any;
    };
}
