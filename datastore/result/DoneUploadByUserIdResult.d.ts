import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class DoneUploadByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Datastore.DataObject | null;
    setItem(item: Gs2Datastore.DataObject | null): this;
    withItem(item: Gs2Datastore.DataObject | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DoneUploadByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
