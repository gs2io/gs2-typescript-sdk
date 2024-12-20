import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DatastoreNamespaceDistributions implements IModel {
    private downloadByUser;
    private uploadByUser;
    private dataSize;
    getDownloadByUser(): Gs2Watch.DatastoreNamespaceDownloadByUserDistribution | null;
    setDownloadByUser(downloadByUser: Gs2Watch.DatastoreNamespaceDownloadByUserDistribution | null): this;
    withDownloadByUser(downloadByUser: Gs2Watch.DatastoreNamespaceDownloadByUserDistribution | null): this;
    getUploadByUser(): Gs2Watch.DatastoreNamespaceUploadByUserDistribution | null;
    setUploadByUser(uploadByUser: Gs2Watch.DatastoreNamespaceUploadByUserDistribution | null): this;
    withUploadByUser(uploadByUser: Gs2Watch.DatastoreNamespaceUploadByUserDistribution | null): this;
    getDataSize(): Gs2Watch.DatastoreNamespaceDataSizeDistribution | null;
    setDataSize(dataSize: Gs2Watch.DatastoreNamespaceDataSizeDistribution | null): this;
    withDataSize(dataSize: Gs2Watch.DatastoreNamespaceDataSizeDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
