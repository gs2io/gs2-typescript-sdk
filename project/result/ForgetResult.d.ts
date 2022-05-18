import IResult from '../../core/interface/IResult';
export default class ForgetResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ForgetResult;
    toDict(): {
        [key: string]: any;
    };
}
