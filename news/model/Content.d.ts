import IModel from '../../core/interface/IModel';
export default class Content implements IModel {
    private section;
    private content;
    private frontMatter;
    getSection(): string | null;
    setSection(section: string | null): this;
    withSection(section: string | null): this;
    getContent(): string | null;
    setContent(content: string | null): this;
    withContent(content: string | null): this;
    getFrontMatter(): string | null;
    setFrontMatter(frontMatter: string | null): this;
    withFrontMatter(frontMatter: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Content | null;
    toDict(): {
        [key: string]: any;
    };
}
