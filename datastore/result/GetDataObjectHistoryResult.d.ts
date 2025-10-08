import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class GetDataObjectHistoryResult implements IResult {
    private item;
    getItem(): Gs2Datastore.DataObjectHistory | null;
    setItem(item: Gs2Datastore.DataObjectHistory | null): this;
    withItem(item: Gs2Datastore.DataObjectHistory | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDataObjectHistoryResult;
    toDict(): {
        [key: string]: any;
    };
}
