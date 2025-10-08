import IModel from '../../core/interface/IModel';
export default class News implements IModel {
    private section;
    private content;
    private title;
    private scheduleEventId;
    private timestamp;
    private frontMatter;
    getSection(): string | null;
    setSection(section: string | null): this;
    withSection(section: string | null): this;
    getContent(): string | null;
    setContent(content: string | null): this;
    withContent(content: string | null): this;
    getTitle(): string | null;
    setTitle(title: string | null): this;
    withTitle(title: string | null): this;
    getScheduleEventId(): string | null;
    setScheduleEventId(scheduleEventId: string | null): this;
    withScheduleEventId(scheduleEventId: string | null): this;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getFrontMatter(): string | null;
    setFrontMatter(frontMatter: string | null): this;
    withFrontMatter(frontMatter: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): News | null;
    toDict(): {
        [key: string]: any;
    };
}
