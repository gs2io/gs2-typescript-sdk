import IResult from '../../core/interface/IResult';
export default class VerifyItemSetResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyItemSetResult;
    toDict(): {
        [key: string]: any;
    };
}
