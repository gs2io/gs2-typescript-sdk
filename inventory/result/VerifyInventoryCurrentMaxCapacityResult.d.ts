import IResult from '../../core/interface/IResult';
export default class VerifyInventoryCurrentMaxCapacityResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyInventoryCurrentMaxCapacityResult;
    toDict(): {
        [key: string]: any;
    };
}
