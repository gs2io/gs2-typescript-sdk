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
var DataObjectHistory = /** @class */ (function () {
    function DataObjectHistory() {
        this.dataObjectHistoryId = null;
        this.dataObjectName = null;
        this.generation = null;
        this.contentLength = null;
        this.createdAt = null;
    }
    DataObjectHistory.prototype.getDataObjectHistoryId = function () {
        return this.dataObjectHistoryId;
    };
    DataObjectHistory.prototype.setDataObjectHistoryId = function (dataObjectHistoryId) {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    };
    DataObjectHistory.prototype.withDataObjectHistoryId = function (dataObjectHistoryId) {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    };
    DataObjectHistory.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DataObjectHistory.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DataObjectHistory.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DataObjectHistory.prototype.getGeneration = function () {
        return this.generation;
    };
    DataObjectHistory.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    DataObjectHistory.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    DataObjectHistory.prototype.getContentLength = function () {
        return this.contentLength;
    };
    DataObjectHistory.prototype.setContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    DataObjectHistory.prototype.withContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    DataObjectHistory.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DataObjectHistory.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataObjectHistory.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataObjectHistory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataObjectHistory()
            .withDataObjectHistoryId(data["dataObjectHistoryId"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"])
            .withContentLength(data["contentLength"])
            .withCreatedAt(data["createdAt"]);
    };
    DataObjectHistory.prototype.toDict = function () {
        return {
            "dataObjectHistoryId": this.getDataObjectHistoryId(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
            "contentLength": this.getContentLength(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return DataObjectHistory;
}());
exports.default = DataObjectHistory;
//# sourceMappingURL=DataObjectHistory.js.map