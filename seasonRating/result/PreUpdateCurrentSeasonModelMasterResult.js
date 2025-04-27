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
var PreUpdateCurrentSeasonModelMasterResult = /** @class */ (function () {
    function PreUpdateCurrentSeasonModelMasterResult() {
        this.uploadToken = null;
        this.uploadUrl = null;
    }
    PreUpdateCurrentSeasonModelMasterResult.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    PreUpdateCurrentSeasonModelMasterResult.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PreUpdateCurrentSeasonModelMasterResult.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PreUpdateCurrentSeasonModelMasterResult.prototype.getUploadUrl = function () {
        return this.uploadUrl;
    };
    PreUpdateCurrentSeasonModelMasterResult.prototype.setUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PreUpdateCurrentSeasonModelMasterResult.prototype.withUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PreUpdateCurrentSeasonModelMasterResult.fromDict = function (data) {
        return new PreUpdateCurrentSeasonModelMasterResult()
            .withUploadToken(data["uploadToken"])
            .withUploadUrl(data["uploadUrl"]);
    };
    PreUpdateCurrentSeasonModelMasterResult.prototype.toDict = function () {
        return {
            "uploadToken": this.getUploadToken(),
            "uploadUrl": this.getUploadUrl(),
        };
    };
    return PreUpdateCurrentSeasonModelMasterResult;
}());
exports.default = PreUpdateCurrentSeasonModelMasterResult;
//# sourceMappingURL=PreUpdateCurrentSeasonModelMasterResult.js.map