import IResult from '@/gs2/core/interface/IResult';
export declare class GetStackStatusResult implements IResult {
    private status;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStackStatusResult;
    toDict(): {
        [key: string]: any;
    };
}
