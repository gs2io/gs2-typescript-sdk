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
var PrepareUpdateCurrentNewsMasterFromGitHubResult = /** @class */ (function () {
    function PrepareUpdateCurrentNewsMasterFromGitHubResult() {
        this.uploadToken = null;
    }
    PrepareUpdateCurrentNewsMasterFromGitHubResult.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubResult.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubResult.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubResult.fromDict = function (data) {
        return new PrepareUpdateCurrentNewsMasterFromGitHubResult()
            .withUploadToken(data["uploadToken"]);
    };
    PrepareUpdateCurrentNewsMasterFromGitHubResult.prototype.toDict = function () {
        return {
            "uploadToken": this.getUploadToken(),
        };
    };
    return PrepareUpdateCurrentNewsMasterFromGitHubResult;
}());
export default PrepareUpdateCurrentNewsMasterFromGitHubResult;
//# sourceMappingURL=PrepareUpdateCurrentNewsMasterFromGitHubResult.js.map