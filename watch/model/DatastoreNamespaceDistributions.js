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
var tslib_1 = require("tslib");
var DatastoreNamespaceDownloadByUserDistribution_1 = tslib_1.__importDefault(require("./DatastoreNamespaceDownloadByUserDistribution"));
var DatastoreNamespaceUploadByUserDistribution_1 = tslib_1.__importDefault(require("./DatastoreNamespaceUploadByUserDistribution"));
var DatastoreNamespaceDataSizeDistribution_1 = tslib_1.__importDefault(require("./DatastoreNamespaceDataSizeDistribution"));
var DatastoreNamespaceDistributions = /** @class */ (function () {
    function DatastoreNamespaceDistributions() {
        this.downloadByUser = null;
        this.uploadByUser = null;
        this.dataSize = null;
    }
    DatastoreNamespaceDistributions.prototype.getDownloadByUser = function () {
        return this.downloadByUser;
    };
    DatastoreNamespaceDistributions.prototype.setDownloadByUser = function (downloadByUser) {
        this.downloadByUser = downloadByUser;
        return this;
    };
    DatastoreNamespaceDistributions.prototype.withDownloadByUser = function (downloadByUser) {
        this.downloadByUser = downloadByUser;
        return this;
    };
    DatastoreNamespaceDistributions.prototype.getUploadByUser = function () {
        return this.uploadByUser;
    };
    DatastoreNamespaceDistributions.prototype.setUploadByUser = function (uploadByUser) {
        this.uploadByUser = uploadByUser;
        return this;
    };
    DatastoreNamespaceDistributions.prototype.withUploadByUser = function (uploadByUser) {
        this.uploadByUser = uploadByUser;
        return this;
    };
    DatastoreNamespaceDistributions.prototype.getDataSize = function () {
        return this.dataSize;
    };
    DatastoreNamespaceDistributions.prototype.setDataSize = function (dataSize) {
        this.dataSize = dataSize;
        return this;
    };
    DatastoreNamespaceDistributions.prototype.withDataSize = function (dataSize) {
        this.dataSize = dataSize;
        return this;
    };
    DatastoreNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceDistributions()
            .withDownloadByUser(DatastoreNamespaceDownloadByUserDistribution_1.default.fromDict(data["downloadByUser"]))
            .withUploadByUser(DatastoreNamespaceUploadByUserDistribution_1.default.fromDict(data["uploadByUser"]))
            .withDataSize(DatastoreNamespaceDataSizeDistribution_1.default.fromDict(data["dataSize"]));
    };
    DatastoreNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "downloadByUser": (_a = this.getDownloadByUser()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "uploadByUser": (_b = this.getUploadByUser()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "dataSize": (_c = this.getDataSize()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return DatastoreNamespaceDistributions;
}());
exports.default = DatastoreNamespaceDistributions;
//# sourceMappingURL=DatastoreNamespaceDistributions.js.map