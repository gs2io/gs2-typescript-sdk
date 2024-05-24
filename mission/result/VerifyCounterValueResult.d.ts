import IResult from '../../core/interface/IResult';
export default class VerifyCounterValueResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCounterValueResult;
    toDict(): {
        [key: string]: any;
    };
}
