import IResult from '../../core/interface/IResult';
export default class ResetBoxByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetBoxByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
