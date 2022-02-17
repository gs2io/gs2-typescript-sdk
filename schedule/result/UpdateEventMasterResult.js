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
import * as Gs2Schedule from '../model';
var UpdateEventMasterResult = /** @class */ (function () {
    function UpdateEventMasterResult() {
        this.item = null;
    }
    UpdateEventMasterResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateEventMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateEventMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateEventMasterResult.fromDict = function (data) {
        return new UpdateEventMasterResult()
            .withItem(Gs2Schedule.EventMaster.fromDict(data["item"]));
    };
    UpdateEventMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateEventMasterResult;
}());
export default UpdateEventMasterResult;
//# sourceMappingURL=UpdateEventMasterResult.js.map