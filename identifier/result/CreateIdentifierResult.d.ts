import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class CreateIdentifierResult implements IResult {
    private item;
    private clientSecret;
    getItem(): Gs2Identifier.Identifier | null;
    setItem(item: Gs2Identifier.Identifier | null): this;
    withItem(item: Gs2Identifier.Identifier | null): this;
    getClientSecret(): string | null;
    setClientSecret(clientSecret: string | null): this;
    withClientSecret(clientSecret: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateIdentifierResult;
    toDict(): {
        [key: string]: any;
    };
}
