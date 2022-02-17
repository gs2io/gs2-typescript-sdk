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
import * as Gs2Inbox from '../model';
var UpdateCurrentMessageMasterResult = /** @class */ (function () {
    function UpdateCurrentMessageMasterResult() {
        this.item = null;
    }
    UpdateCurrentMessageMasterResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateCurrentMessageMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentMessageMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateCurrentMessageMasterResult.fromDict = function (data) {
        return new UpdateCurrentMessageMasterResult()
            .withItem(Gs2Inbox.CurrentMessageMaster.fromDict(data["item"]));
    };
    UpdateCurrentMessageMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentMessageMasterResult;
}());
export default UpdateCurrentMessageMasterResult;
//# sourceMappingURL=UpdateCurrentMessageMasterResult.js.map