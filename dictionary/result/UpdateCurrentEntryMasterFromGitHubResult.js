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
import * as Gs2Dictionary from '../model';
var UpdateCurrentEntryMasterFromGitHubResult = /** @class */ (function () {
    function UpdateCurrentEntryMasterFromGitHubResult() {
        this.item = null;
    }
    UpdateCurrentEntryMasterFromGitHubResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateCurrentEntryMasterFromGitHubResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentEntryMasterFromGitHubResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentEntryMasterFromGitHubResult.fromDict = function (data) {
        return new UpdateCurrentEntryMasterFromGitHubResult()
            .withItem(Gs2Dictionary.CurrentEntryMaster.fromDict(data["item"]));
    };
    UpdateCurrentEntryMasterFromGitHubResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentEntryMasterFromGitHubResult;
}());
export default UpdateCurrentEntryMasterFromGitHubResult;
//# sourceMappingURL=UpdateCurrentEntryMasterFromGitHubResult.js.map