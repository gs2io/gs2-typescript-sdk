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
var PrepareUploadResult = /** @class */ (function () {
    function PrepareUploadResult() {
        this.item = null;
        this.uploadUrl = null;
    }
    PrepareUploadResult.prototype.getItem = function () {
        return this.item;
    };
    PrepareUploadResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareUploadResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareUploadResult.prototype.getUploadUrl = function () {
        return this.uploadUrl;
    };
    PrepareUploadResult.prototype.setUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PrepareUploadResult.prototype.withUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PrepareUploadResult.fromDict = function (data) {
        return new PrepareUploadResult()
            .withItem(Gs2Datastore.DataObject.fromDict(data["item"]))
            .withUploadUrl(data["uploadUrl"]);
    };
    PrepareUploadResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "uploadUrl": this.getUploadUrl(),
        };
    };
    return PrepareUploadResult;
}());
export default PrepareUploadResult;
//# sourceMappingURL=PrepareUploadResult.js.map