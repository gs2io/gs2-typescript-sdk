import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Formation.Namespace | null;
    setItem(item: Gs2Formation.Namespace | null): this;
    withItem(item: Gs2Formation.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
