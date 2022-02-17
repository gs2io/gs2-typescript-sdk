import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Showcase.Namespace | null;
    setItem(item: Gs2Showcase.Namespace | null): this;
    withItem(item: Gs2Showcase.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
