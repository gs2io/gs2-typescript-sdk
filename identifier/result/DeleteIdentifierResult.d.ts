import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class DeleteIdentifierResult implements IResult {
    private item;
    getItem(): Gs2Identifier.Identifier | null;
    setItem(item: Gs2Identifier.Identifier | null): this;
    withItem(item: Gs2Identifier.Identifier | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteIdentifierResult;
    toDict(): {
        [key: string]: any;
    };
}
