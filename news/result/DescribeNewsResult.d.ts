import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class DescribeNewsResult implements IResult {
    private items;
    private contentHash;
    private templateHash;
    getItems(): Gs2News.News[] | null;
    setItems(items: Gs2News.News[] | null): this;
    withItems(items: Gs2News.News[] | null): this;
    getContentHash(): string | null;
    setContentHash(contentHash: string | null): this;
    withContentHash(contentHash: string | null): this;
    getTemplateHash(): string | null;
    setTemplateHash(templateHash: string | null): this;
    withTemplateHash(templateHash: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNewsResult;
    toDict(): {
        [key: string]: any;
    };
}
