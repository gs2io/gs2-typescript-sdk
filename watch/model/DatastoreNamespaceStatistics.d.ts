import IModel from '../../core/interface/IModel';
export default class DatastoreNamespaceStatistics implements IModel {
    private upload;
    private download;
    getUpload(): number | null;
    setUpload(upload: number | null): this;
    withUpload(upload: number | null): this;
    getDownload(): number | null;
    setDownload(download: number | null): this;
    withDownload(download: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
