import IResult from '../../core/interface/IResult';
export default class VerifyBigItemByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyBigItemByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
