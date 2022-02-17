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
var PrepareUpdateCurrentNewsMasterResult = /** @class */ (function () {
    function PrepareUpdateCurrentNewsMasterResult() {
        this.uploadToken = null;
        this.templateUploadUrl = null;
    }
    PrepareUpdateCurrentNewsMasterResult.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    PrepareUpdateCurrentNewsMasterResult.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PrepareUpdateCurrentNewsMasterResult.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PrepareUpdateCurrentNewsMasterResult.prototype.getTemplateUploadUrl = function () {
        return this.templateUploadUrl;
    };
    PrepareUpdateCurrentNewsMasterResult.prototype.setTemplateUploadUrl = function (templateUploadUrl) {
        this.templateUploadUrl = templateUploadUrl;
        return this;
    };
    PrepareUpdateCurrentNewsMasterResult.prototype.withTemplateUploadUrl = function (templateUploadUrl) {
        this.templateUploadUrl = templateUploadUrl;
        return this;
    };
    PrepareUpdateCurrentNewsMasterResult.fromDict = function (data) {
        return new PrepareUpdateCurrentNewsMasterResult()
            .withUploadToken(data["uploadToken"])
            .withTemplateUploadUrl(data["templateUploadUrl"]);
    };
    PrepareUpdateCurrentNewsMasterResult.prototype.toDict = function () {
        return {
            "uploadToken": this.getUploadToken(),
            "templateUploadUrl": this.getTemplateUploadUrl(),
        };
    };
    return PrepareUpdateCurrentNewsMasterResult;
}());
export default PrepareUpdateCurrentNewsMasterResult;
//# sourceMappingURL=PrepareUpdateCurrentNewsMasterResult.js.map