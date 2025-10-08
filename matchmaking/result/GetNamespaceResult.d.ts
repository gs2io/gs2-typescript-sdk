import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.Namespace | null;
    setItem(item: Gs2Matchmaking.Namespace | null): this;
    withItem(item: Gs2Matchmaking.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
