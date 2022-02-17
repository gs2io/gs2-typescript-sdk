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
var GetFormWithSignatureResult = /** @class */ (function () {
    function GetFormWithSignatureResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
        this.mold = null;
        this.moldModel = null;
        this.formModel = null;
    }
    GetFormWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    GetFormWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetFormWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetFormWithSignatureResult.prototype.getBody = function () {
        return this.body;
    };
    GetFormWithSignatureResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetFormWithSignatureResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetFormWithSignatureResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetFormWithSignatureResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetFormWithSignatureResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetFormWithSignatureResult.prototype.getMold = function () {
        return this.mold;
    };
    GetFormWithSignatureResult.prototype.setMold = function (mold) {
        this.mold = mold;
        return this;
    };
    GetFormWithSignatureResult.prototype.withMold = function (mold) {
        this.mold = mold;
        return this;
    };
    GetFormWithSignatureResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    GetFormWithSignatureResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    GetFormWithSignatureResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    GetFormWithSignatureResult.prototype.getFormModel = function () {
        return this.formModel;
    };
    GetFormWithSignatureResult.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    GetFormWithSignatureResult.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    GetFormWithSignatureResult.fromDict = function (data) {
        return new GetFormWithSignatureResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    };
    GetFormWithSignatureResult.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "mold": (_b = this.getMold()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "moldModel": (_c = this.getMoldModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "formModel": (_d = this.getFormModel()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return GetFormWithSignatureResult;
}());
export default GetFormWithSignatureResult;
//# sourceMappingURL=GetFormWithSignatureResult.js.map