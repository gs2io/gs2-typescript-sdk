import IModel from '../../core/interface/IModel';
export default class SignedBallot implements IModel {
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
    }): SignedBallot | null;
    toDict(): {
        [key: string]: any;
    };
}
