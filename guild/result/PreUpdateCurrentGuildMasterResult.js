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
var PreUpdateCurrentGuildMasterResult = /** @class */ (function () {
    function PreUpdateCurrentGuildMasterResult() {
        this.uploadToken = null;
        this.uploadUrl = null;
    }
    PreUpdateCurrentGuildMasterResult.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    PreUpdateCurrentGuildMasterResult.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PreUpdateCurrentGuildMasterResult.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PreUpdateCurrentGuildMasterResult.prototype.getUploadUrl = function () {
        return this.uploadUrl;
    };
    PreUpdateCurrentGuildMasterResult.prototype.setUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PreUpdateCurrentGuildMasterResult.prototype.withUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PreUpdateCurrentGuildMasterResult.fromDict = function (data) {
        return new PreUpdateCurrentGuildMasterResult()
            .withUploadToken(data["uploadToken"])
            .withUploadUrl(data["uploadUrl"]);
    };
    PreUpdateCurrentGuildMasterResult.prototype.toDict = function () {
        return {
            "uploadToken": this.getUploadToken(),
            "uploadUrl": this.getUploadUrl(),
        };
    };
    return PreUpdateCurrentGuildMasterResult;
}());
exports.default = PreUpdateCurrentGuildMasterResult;
//# sourceMappingURL=PreUpdateCurrentGuildMasterResult.js.map