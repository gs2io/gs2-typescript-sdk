import IModel from '../../core/interface/IModel';
export default class JobResultBody implements IModel {
    private tryNumber;
    private statusCode;
    private result;
    private tryAt;
    getTryNumber(): number | null;
    setTryNumber(tryNumber: number | null): this;
    withTryNumber(tryNumber: number | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    getTryAt(): number | null;
    setTryAt(tryAt: number | null): this;
    withTryAt(tryAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): JobResultBody | null;
    toDict(): {
        [key: string]: any;
    };
}
