"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var DatastoreNamespaceStatistics = /** @class */ (function () {
    function DatastoreNamespaceStatistics() {
        this.upload = null;
        this.download = null;
    }
    DatastoreNamespaceStatistics.prototype.getUpload = function () {
        return this.upload;
    };
    DatastoreNamespaceStatistics.prototype.setUpload = function (upload) {
        this.upload = upload;
        return this;
    };
    DatastoreNamespaceStatistics.prototype.withUpload = function (upload) {
        this.upload = upload;
        return this;
    };
    DatastoreNamespaceStatistics.prototype.getDownload = function () {
        return this.download;
    };
    DatastoreNamespaceStatistics.prototype.setDownload = function (download) {
        this.download = download;
        return this;
    };
    DatastoreNamespaceStatistics.prototype.withDownload = function (download) {
        this.download = download;
        return this;
    };
    DatastoreNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceStatistics()
            .withUpload(data["upload"])
            .withDownload(data["download"]);
    };
    DatastoreNamespaceStatistics.prototype.toDict = function () {
        return {
            "upload": this.getUpload(),
            "download": this.getDownload(),
        };
    };
    return DatastoreNamespaceStatistics;
}());
exports.default = DatastoreNamespaceStatistics;
//# sourceMappingURL=DatastoreNamespaceStatistics.js.map