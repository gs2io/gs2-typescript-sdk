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
import * as Gs2Quest from '../model';
var GetQuestModelMasterResult = /** @class */ (function () {
    function GetQuestModelMasterResult() {
        this.item = null;
    }
    GetQuestModelMasterResult.prototype.getItem = function () {
        return this.item;
    };
    GetQuestModelMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetQuestModelMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetQuestModelMasterResult.fromDict = function (data) {
        return new GetQuestModelMasterResult()
            .withItem(Gs2Quest.QuestModelMaster.fromDict(data["item"]));
    };
    GetQuestModelMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GetQuestModelMasterResult;
}());
export default GetQuestModelMasterResult;
//# sourceMappingURL=GetQuestModelMasterResult.js.map