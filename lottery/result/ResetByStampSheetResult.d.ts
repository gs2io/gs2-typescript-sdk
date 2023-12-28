import IResult from '../../core/interface/IResult';
export default class ResetByStampSheetResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ResetByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
