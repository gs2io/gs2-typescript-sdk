import IResult from '../../core/interface/IResult';
export default class VerifyItemSetByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyItemSetByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
