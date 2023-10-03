import IResult from '../../core/interface/IResult';
export default class VerifyCounterResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCounterResult;
    toDict(): {
        [key: string]: any;
    };
}
