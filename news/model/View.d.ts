import IModel from '../../core/interface/IModel';
import * as Gs2News from '../../news/model';
export default class View implements IModel {
    private contents;
    private removeContents;
    getContents(): Gs2News.Content[] | null;
    setContents(contents: Gs2News.Content[] | null): this;
    withContents(contents: Gs2News.Content[] | null): this;
    getRemoveContents(): Gs2News.Content[] | null;
    setRemoveContents(removeContents: Gs2News.Content[] | null): this;
    withRemoveContents(removeContents: Gs2News.Content[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): View | null;
    toDict(): {
        [key: string]: any;
    };
}
