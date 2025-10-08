import IResult from '../../core/interface/IResult';
export default class DeleteSimpleItemsByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSimpleItemsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
