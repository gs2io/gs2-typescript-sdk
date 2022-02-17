import IResult from '../../core/interface/IResult';
export default class ResetByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
