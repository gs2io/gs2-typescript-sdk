import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class PrepareUploadByUserIdResult implements IResult {
    private item;
    private uploadUrl;
    getItem(): Gs2Datastore.DataObject | null;
    setItem(item: Gs2Datastore.DataObject | null): this;
    withItem(item: Gs2Datastore.DataObject | null): this;
    getUploadUrl(): string | null;
    setUploadUrl(uploadUrl: string | null): this;
    withUploadUrl(uploadUrl: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareUploadByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
