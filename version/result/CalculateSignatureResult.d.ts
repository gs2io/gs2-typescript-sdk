import IResult from '../../core/interface/IResult';
export default class CalculateSignatureResult implements IResult {
    private body;
    private signature;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CalculateSignatureResult;
    toDict(): {
        [key: string]: any;
    };
}
