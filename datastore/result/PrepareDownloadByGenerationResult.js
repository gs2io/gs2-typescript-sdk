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
import * as Gs2Datastore from '../model';
var PrepareDownloadByGenerationResult = /** @class */ (function () {
    function PrepareDownloadByGenerationResult() {
        this.item = null;
        this.fileUrl = null;
        this.contentLength = null;
    }
    PrepareDownloadByGenerationResult.prototype.getItem = function () {
        return this.item;
    };
    PrepareDownloadByGenerationResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareDownloadByGenerationResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareDownloadByGenerationResult.prototype.getFileUrl = function () {
        return this.fileUrl;
    };
    PrepareDownloadByGenerationResult.prototype.setFileUrl = function (fileUrl) {
        this.fileUrl = fileUrl;
        return this;
    };
    PrepareDownloadByGenerationResult.prototype.withFileUrl = function (fileUrl) {
        this.fileUrl = fileUrl;
        return this;
    };
    PrepareDownloadByGenerationResult.prototype.getContentLength = function () {
        return this.contentLength;
    };
    PrepareDownloadByGenerationResult.prototype.setContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    PrepareDownloadByGenerationResult.prototype.withContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    PrepareDownloadByGenerationResult.fromDict = function (data) {
        return new PrepareDownloadByGenerationResult()
            .withItem(Gs2Datastore.DataObject.fromDict(data["item"]))
            .withFileUrl(data["fileUrl"])
            .withContentLength(data["contentLength"]);
    };
    PrepareDownloadByGenerationResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "fileUrl": this.getFileUrl(),
            "contentLength": this.getContentLength(),
        };
    };
    return PrepareDownloadByGenerationResult;
}());
export default PrepareDownloadByGenerationResult;
//# sourceMappingURL=PrepareDownloadByGenerationResult.js.map