import IResult from '../../core/interface/IResult';
export default class VerifyInventoryCurrentMaxCapacityByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyInventoryCurrentMaxCapacityByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
