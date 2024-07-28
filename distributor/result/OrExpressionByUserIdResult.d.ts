import IResult from '../../core/interface/IResult';
export default class OrExpressionByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): OrExpressionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
