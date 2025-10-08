import IResult from '../../core/interface/IResult';
export default class ResetPrizeLimitResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetPrizeLimitResult;
    toDict(): {
        [key: string]: any;
    };
}
