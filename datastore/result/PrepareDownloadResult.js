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
var Gs2Datastore = (0, tslib_1.__importStar)(require("../model"));
var PrepareDownloadResult = /** @class */ (function () {
    function PrepareDownloadResult() {
        this.item = null;
        this.fileUrl = null;
        this.contentLength = null;
    }
    PrepareDownloadResult.prototype.getItem = function () {
        return this.item;
    };
    PrepareDownloadResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareDownloadResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareDownloadResult.prototype.getFileUrl = function () {
        return this.fileUrl;
    };
    PrepareDownloadResult.prototype.setFileUrl = function (fileUrl) {
        this.fileUrl = fileUrl;
        return this;
    };
    PrepareDownloadResult.prototype.withFileUrl = function (fileUrl) {
        this.fileUrl = fileUrl;
        return this;
    };
    PrepareDownloadResult.prototype.getContentLength = function () {
        return this.contentLength;
    };
    PrepareDownloadResult.prototype.setContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    PrepareDownloadResult.prototype.withContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    PrepareDownloadResult.fromDict = function (data) {
        return new PrepareDownloadResult()
            .withItem(Gs2Datastore.DataObject.fromDict(data["item"]))
            .withFileUrl(data["fileUrl"])
            .withContentLength(data["contentLength"]);
    };
    PrepareDownloadResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "fileUrl": this.getFileUrl(),
            "contentLength": this.getContentLength(),
        };
    };
    return PrepareDownloadResult;
}());
exports.default = PrepareDownloadResult;
//# sourceMappingURL=PrepareDownloadResult.js.map