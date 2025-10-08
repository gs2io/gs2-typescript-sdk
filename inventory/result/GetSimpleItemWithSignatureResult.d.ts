import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetSimpleItemWithSignatureResult implements IResult {
    private item;
    private simpleItemModel;
    private body;
    private signature;
    getItem(): Gs2Inventory.SimpleItem | null;
    setItem(item: Gs2Inventory.SimpleItem | null): this;
    withItem(item: Gs2Inventory.SimpleItem | null): this;
    getSimpleItemModel(): Gs2Inventory.SimpleItemModel | null;
    setSimpleItemModel(simpleItemModel: Gs2Inventory.SimpleItemModel | null): this;
    withSimpleItemModel(simpleItemModel: Gs2Inventory.SimpleItemModel | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSimpleItemWithSignatureResult;
    toDict(): {
        [key: string]: any;
    };
}
