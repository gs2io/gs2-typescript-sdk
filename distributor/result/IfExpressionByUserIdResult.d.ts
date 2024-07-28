import IResult from '../../core/interface/IResult';
export default class IfExpressionByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): IfExpressionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
