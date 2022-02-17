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
import * as Gs2Formation from '../model';
var GetMoldResult = /** @class */ (function () {
    function GetMoldResult() {
        this.item = null;
        this.moldModel = null;
    }
    GetMoldResult.prototype.getItem = function () {
        return this.item;
    };
    GetMoldResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetMoldResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetMoldResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    GetMoldResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    GetMoldResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    GetMoldResult.fromDict = function (data) {
        return new GetMoldResult()
            .withItem(Gs2Formation.Mold.fromDict(data["item"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]));
    };
    GetMoldResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "moldModel": (_b = this.getMoldModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetMoldResult;
}());
export default GetMoldResult;
//# sourceMappingURL=GetMoldResult.js.map