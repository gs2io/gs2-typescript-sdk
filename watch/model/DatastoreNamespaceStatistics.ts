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

export default class DatastoreNamespaceStatistics implements IModel {
    private upload: number|null = null;
    private download: number|null = null;
    public getUpload(): number|null {
        return this.upload;
    }
    public setUpload(upload: number|null) {
        this.upload = upload;
        return this;
    }
    public withUpload(upload: number|null): this {
        this.upload = upload;
        return this;
    }
    public getDownload(): number|null {
        return this.download;
    }
    public setDownload(download: number|null) {
        this.download = download;
        return this;
    }
    public withDownload(download: number|null): this {
        this.download = download;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DatastoreNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceStatistics()
            .withUpload(data["upload"])
            .withDownload(data["download"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "upload": this.getUpload(),
            "download": this.getDownload(),
        };
    }
}
