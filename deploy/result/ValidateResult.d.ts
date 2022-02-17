import IResult from '@/gs2/core/interface/IResult';
export declare class ValidateResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ValidateResult;
    toDict(): {
        [key: string]: any;
    };
}
