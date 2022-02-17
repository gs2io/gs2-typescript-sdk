import IModel from '../../core/interface/IModel';
export default class Chart implements IModel {
    private chartId;
    private embedId;
    private html;
    getChartId(): string | null;
    setChartId(chartId: string | null): this;
    withChartId(chartId: string | null): this;
    getEmbedId(): string | null;
    setEmbedId(embedId: string | null): this;
    withEmbedId(embedId: string | null): this;
    getHtml(): string | null;
    setHtml(html: string | null): this;
    withHtml(html: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Chart | null;
    toDict(): {
        [key: string]: any;
    };
}
