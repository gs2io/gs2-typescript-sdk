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
import * as Gs2Project from '../model';
var CreateProjectResult = /** @class */ (function () {
    function CreateProjectResult() {
        this.item = null;
    }
    CreateProjectResult.prototype.getItem = function () {
        return this.item;
    };
    CreateProjectResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    CreateProjectResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    CreateProjectResult.fromDict = function (data) {
        return new CreateProjectResult()
            .withItem(Gs2Project.Project.fromDict(data["item"]));
    };
    CreateProjectResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CreateProjectResult;
}());
export { CreateProjectResult };
//# sourceMappingURL=CreateProjectResult.js.map