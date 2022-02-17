import IResult from '@/gs2/core/interface/IResult';
export declare class DeleteAccountResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): DeleteAccountResult;
    toDict(): {
        [key: string]: any;
    };
}
