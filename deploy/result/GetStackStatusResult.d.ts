import IResult from '../../core/interface/IResult';
export default class GetStackStatusResult implements IResult {
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
