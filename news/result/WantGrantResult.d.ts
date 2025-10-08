import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class WantGrantResult implements IResult {
    private items;
    private browserUrl;
    private zipUrl;
    getItems(): Gs2News.SetCookieRequestEntry[] | null;
    setItems(items: Gs2News.SetCookieRequestEntry[] | null): this;
    withItems(items: Gs2News.SetCookieRequestEntry[] | null): this;
    getBrowserUrl(): string | null;
    setBrowserUrl(browserUrl: string | null): this;
    withBrowserUrl(browserUrl: string | null): this;
    getZipUrl(): string | null;
    setZipUrl(zipUrl: string | null): this;
    withZipUrl(zipUrl: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WantGrantResult;
    toDict(): {
        [key: string]: any;
    };
}
