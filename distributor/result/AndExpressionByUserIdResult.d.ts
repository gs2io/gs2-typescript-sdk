import IResult from '../../core/interface/IResult';
export default class AndExpressionByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): AndExpressionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
