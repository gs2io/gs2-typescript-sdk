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
import * as Gs2Matchmaking from '../model';
var UpdateCurrentRatingModelMasterFromGitHubResult = /** @class */ (function () {
    function UpdateCurrentRatingModelMasterFromGitHubResult() {
        this.item = null;
    }
    UpdateCurrentRatingModelMasterFromGitHubResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateCurrentRatingModelMasterFromGitHubResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentRatingModelMasterFromGitHubResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentRatingModelMasterFromGitHubResult.fromDict = function (data) {
        return new UpdateCurrentRatingModelMasterFromGitHubResult()
            .withItem(Gs2Matchmaking.CurrentRatingModelMaster.fromDict(data["item"]));
    };
    UpdateCurrentRatingModelMasterFromGitHubResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentRatingModelMasterFromGitHubResult;
}());
export default UpdateCurrentRatingModelMasterFromGitHubResult;
//# sourceMappingURL=UpdateCurrentRatingModelMasterFromGitHubResult.js.map