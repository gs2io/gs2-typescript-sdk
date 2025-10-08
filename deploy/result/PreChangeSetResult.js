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
var PreChangeSetResult = /** @class */ (function () {
    function PreChangeSetResult() {
        this.uploadToken = null;
        this.uploadUrl = null;
    }
    PreChangeSetResult.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    PreChangeSetResult.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PreChangeSetResult.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PreChangeSetResult.prototype.getUploadUrl = function () {
        return this.uploadUrl;
    };
    PreChangeSetResult.prototype.setUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PreChangeSetResult.prototype.withUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PreChangeSetResult.fromDict = function (data) {
        return new PreChangeSetResult()
            .withUploadToken(data["uploadToken"])
            .withUploadUrl(data["uploadUrl"]);
    };
    PreChangeSetResult.prototype.toDict = function () {
        return {
            "uploadToken": this.getUploadToken(),
            "uploadUrl": this.getUploadUrl(),
        };
    };
    return PreChangeSetResult;
}());
exports.default = PreChangeSetResult;
//# sourceMappingURL=PreChangeSetResult.js.map