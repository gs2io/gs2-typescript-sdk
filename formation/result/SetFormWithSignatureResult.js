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
var SetFormWithSignatureResult = /** @class */ (function () {
    function SetFormWithSignatureResult() {
        this.item = null;
        this.mold = null;
        this.moldModel = null;
        this.formModel = null;
    }
    SetFormWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    SetFormWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetFormWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetFormWithSignatureResult.prototype.getMold = function () {
        return this.mold;
    };
    SetFormWithSignatureResult.prototype.setMold = function (mold) {
        this.mold = mold;
        return this;
    };
    SetFormWithSignatureResult.prototype.withMold = function (mold) {
        this.mold = mold;
        return this;
    };
    SetFormWithSignatureResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    SetFormWithSignatureResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetFormWithSignatureResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetFormWithSignatureResult.prototype.getFormModel = function () {
        return this.formModel;
    };
    SetFormWithSignatureResult.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    SetFormWithSignatureResult.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    SetFormWithSignatureResult.fromDict = function (data) {
        return new SetFormWithSignatureResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    };
    SetFormWithSignatureResult.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "mold": (_b = this.getMold()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "moldModel": (_c = this.getMoldModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "formModel": (_d = this.getFormModel()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return SetFormWithSignatureResult;
}());
export default SetFormWithSignatureResult;
//# sourceMappingURL=SetFormWithSignatureResult.js.map