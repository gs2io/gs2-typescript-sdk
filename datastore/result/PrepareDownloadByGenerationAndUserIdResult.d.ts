import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class PrepareDownloadByGenerationAndUserIdResult implements IResult {
    private item;
    private fileUrl;
    private contentLength;
    getItem(): Gs2Datastore.DataObject | null;
    setItem(item: Gs2Datastore.DataObject | null): this;
    withItem(item: Gs2Datastore.DataObject | null): this;
    getFileUrl(): string | null;
    setFileUrl(fileUrl: string | null): this;
    withFileUrl(fileUrl: string | null): this;
    getContentLength(): number | null;
    setContentLength(contentLength: number | null): this;
    withContentLength(contentLength: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareDownloadByGenerationAndUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
