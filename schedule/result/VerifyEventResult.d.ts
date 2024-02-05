import IResult from '../../core/interface/IResult';
export default class VerifyEventResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyEventResult;
    toDict(): {
        [key: string]: any;
    };
}
