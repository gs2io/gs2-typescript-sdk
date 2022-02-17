import IResult from '../../core/interface/IResult';
export default class ResetBoxResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetBoxResult;
    toDict(): {
        [key: string]: any;
    };
}
