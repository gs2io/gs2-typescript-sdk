/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';
import DatastoreNamespaceDownloadByUserDistributionStatistics from './DatastoreNamespaceDownloadByUserDistributionStatistics';
import DatastoreNamespaceDownloadByUserDistributionSegment from './DatastoreNamespaceDownloadByUserDistributionSegment';
import DatastoreNamespaceDownloadByUserDistribution from './DatastoreNamespaceDownloadByUserDistribution';
import DatastoreNamespaceUploadByUserDistributionStatistics from './DatastoreNamespaceUploadByUserDistributionStatistics';
import DatastoreNamespaceUploadByUserDistributionSegment from './DatastoreNamespaceUploadByUserDistributionSegment';
import DatastoreNamespaceUploadByUserDistribution from './DatastoreNamespaceUploadByUserDistribution';
import DatastoreNamespaceDataSizeDistributionStatistics from './DatastoreNamespaceDataSizeDistributionStatistics';
import DatastoreNamespaceDataSizeDistributionSegment from './DatastoreNamespaceDataSizeDistributionSegment';
import DatastoreNamespaceDataSizeDistribution from './DatastoreNamespaceDataSizeDistribution';

export default class DatastoreNamespaceDistributions implements IModel {
    private downloadByUser: DatastoreNamespaceDownloadByUserDistribution|null = null;
    private uploadByUser: DatastoreNamespaceUploadByUserDistribution|null = null;
    private dataSize: DatastoreNamespaceDataSizeDistribution|null = null;
    public getDownloadByUser(): DatastoreNamespaceDownloadByUserDistribution|null {
        return this.downloadByUser;
    }
    public setDownloadByUser(downloadByUser: DatastoreNamespaceDownloadByUserDistribution|null) {
        this.downloadByUser = downloadByUser;
        return this;
    }
    public withDownloadByUser(downloadByUser: DatastoreNamespaceDownloadByUserDistribution|null): this {
        this.downloadByUser = downloadByUser;
        return this;
    }
    public getUploadByUser(): DatastoreNamespaceUploadByUserDistribution|null {
        return this.uploadByUser;
    }
    public setUploadByUser(uploadByUser: DatastoreNamespaceUploadByUserDistribution|null) {
        this.uploadByUser = uploadByUser;
        return this;
    }
    public withUploadByUser(uploadByUser: DatastoreNamespaceUploadByUserDistribution|null): this {
        this.uploadByUser = uploadByUser;
        return this;
    }
    public getDataSize(): DatastoreNamespaceDataSizeDistribution|null {
        return this.dataSize;
    }
    public setDataSize(dataSize: DatastoreNamespaceDataSizeDistribution|null) {
        this.dataSize = dataSize;
        return this;
    }
    public withDataSize(dataSize: DatastoreNamespaceDataSizeDistribution|null): this {
        this.dataSize = dataSize;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DatastoreNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceDistributions()
            .withDownloadByUser(DatastoreNamespaceDownloadByUserDistribution.fromDict(data["downloadByUser"]))
            .withUploadByUser(DatastoreNamespaceUploadByUserDistribution.fromDict(data["uploadByUser"]))
            .withDataSize(DatastoreNamespaceDataSizeDistribution.fromDict(data["dataSize"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "downloadByUser": this.getDownloadByUser()?.toDict(),
            "uploadByUser": this.getUploadByUser()?.toDict(),
            "dataSize": this.getDataSize()?.toDict(),
        };
    }
}
