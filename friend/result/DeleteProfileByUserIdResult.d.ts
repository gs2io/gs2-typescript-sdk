import IResult from '../../core/interface/IResult';
export default class DeleteProfileByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): DeleteProfileByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
