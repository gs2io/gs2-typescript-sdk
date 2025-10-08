import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Stamina.Namespace | null;
    setItem(item: Gs2Stamina.Namespace | null): this;
    withItem(item: Gs2Stamina.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
