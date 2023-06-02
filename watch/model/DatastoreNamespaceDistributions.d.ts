import IModel from '../../core/interface/IModel';
import DatastoreNamespaceDownloadByUserDistribution from './DatastoreNamespaceDownloadByUserDistribution';
import DatastoreNamespaceUploadByUserDistribution from './DatastoreNamespaceUploadByUserDistribution';
import DatastoreNamespaceDataSizeDistribution from './DatastoreNamespaceDataSizeDistribution';
export default class DatastoreNamespaceDistributions implements IModel {
    private downloadByUser;
    private uploadByUser;
    private dataSize;
    getDownloadByUser(): DatastoreNamespaceDownloadByUserDistribution | null;
    setDownloadByUser(downloadByUser: DatastoreNamespaceDownloadByUserDistribution | null): this;
    withDownloadByUser(downloadByUser: DatastoreNamespaceDownloadByUserDistribution | null): this;
    getUploadByUser(): DatastoreNamespaceUploadByUserDistribution | null;
    setUploadByUser(uploadByUser: DatastoreNamespaceUploadByUserDistribution | null): this;
    withUploadByUser(uploadByUser: DatastoreNamespaceUploadByUserDistribution | null): this;
    getDataSize(): DatastoreNamespaceDataSizeDistribution | null;
    setDataSize(dataSize: DatastoreNamespaceDataSizeDistribution | null): this;
    withDataSize(dataSize: DatastoreNamespaceDataSizeDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DatastoreNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
