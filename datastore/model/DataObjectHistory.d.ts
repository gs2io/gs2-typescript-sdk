import IModel from '../../core/interface/IModel';
export default class DataObjectHistory implements IModel {
    private dataObjectHistoryId;
    private dataObjectName;
    private generation;
    private contentLength;
    private createdAt;
    getDataObjectHistoryId(): string | null;
    setDataObjectHistoryId(dataObjectHistoryId: string | null): this;
    withDataObjectHistoryId(dataObjectHistoryId: string | null): this;
    getDataObjectName(): string | null;
    setDataObjectName(dataObjectName: string | null): this;
    withDataObjectName(dataObjectName: string | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    getContentLength(): number | null;
    setContentLength(contentLength: number | null): this;
    withContentLength(contentLength: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DataObjectHistory | null;
    toDict(): {
        [key: string]: any;
    };
}
