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

import * as Gs2Watch from '../../watch/model'
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
    private downloadByUser: Gs2Watch.DatastoreNamespaceDownloadByUserDistribution|null = null;
    private uploadByUser: Gs2Watch.DatastoreNamespaceUploadByUserDistribution|null = null;
    private dataSize: Gs2Watch.DatastoreNamespaceDataSizeDistribution|null = null;
    public getDownloadByUser(): Gs2Watch.DatastoreNamespaceDownloadByUserDistribution|null {
        return this.downloadByUser;
    }
    public setDownloadByUser(downloadByUser: Gs2Watch.DatastoreNamespaceDownloadByUserDistribution|null) {
        this.downloadByUser = downloadByUser;
        return this;
    }
    public withDownloadByUser(downloadByUser: Gs2Watch.DatastoreNamespaceDownloadByUserDistribution|null): this {
        this.downloadByUser = downloadByUser;
        return this;
    }
    public getUploadByUser(): Gs2Watch.DatastoreNamespaceUploadByUserDistribution|null {
        return this.uploadByUser;
    }
    public setUploadByUser(uploadByUser: Gs2Watch.DatastoreNamespaceUploadByUserDistribution|null) {
        this.uploadByUser = uploadByUser;
        return this;
    }
    public withUploadByUser(uploadByUser: Gs2Watch.DatastoreNamespaceUploadByUserDistribution|null): this {
        this.uploadByUser = uploadByUser;
        return this;
    }
    public getDataSize(): Gs2Watch.DatastoreNamespaceDataSizeDistribution|null {
        return this.dataSize;
    }
    public setDataSize(dataSize: Gs2Watch.DatastoreNamespaceDataSizeDistribution|null) {
        this.dataSize = dataSize;
        return this;
    }
    public withDataSize(dataSize: Gs2Watch.DatastoreNamespaceDataSizeDistribution|null): this {
        this.dataSize = dataSize;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DatastoreNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceDistributions()
            .withDownloadByUser(Gs2Watch.DatastoreNamespaceDownloadByUserDistribution.fromDict(data["downloadByUser"]))
            .withUploadByUser(Gs2Watch.DatastoreNamespaceUploadByUserDistribution.fromDict(data["uploadByUser"]))
            .withDataSize(Gs2Watch.DatastoreNamespaceDataSizeDistribution.fromDict(data["dataSize"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "downloadByUser": this.getDownloadByUser()?.toDict(),
            "uploadByUser": this.getUploadByUser()?.toDict(),
            "dataSize": this.getDataSize()?.toDict(),
        };
    }
}
