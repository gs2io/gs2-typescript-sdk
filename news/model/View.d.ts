import IModel from '../../core/interface/IModel';
import Content from './Content';
export default class View implements IModel {
    private contents;
    private removeContents;
    getContents(): Content[] | null;
    setContents(contents: Content[] | null): this;
    withContents(contents: Content[] | null): this;
    getRemoveContents(): Content[] | null;
    setRemoveContents(removeContents: Content[] | null): this;
    withRemoveContents(removeContents: Content[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): View | null;
    toDict(): {
        [key: string]: any;
    };
}
