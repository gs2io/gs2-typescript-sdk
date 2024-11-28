"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResult = exports.VerifyActionResult = exports.ConsumeActionResult = exports.AcquireActionResult = exports.Region = exports.ProjectTokenGs2Credential = exports.BasicGs2Credential = exports.Gs2WebSocketSession = exports.Gs2RestSession = exports.AbstractGs2Client = void 0;
var tslib_1 = require("tslib");
var AbstractGs2RestClient_1 = tslib_1.__importDefault(require("./AbstractGs2RestClient"));
exports.AbstractGs2Client = AbstractGs2RestClient_1.default;
var model_1 = require("./model");
Object.defineProperty(exports, "Gs2RestSession", { enumerable: true, get: function () { return model_1.Gs2RestSession; } });
Object.defineProperty(exports, "Gs2WebSocketSession", { enumerable: true, get: function () { return model_1.Gs2WebSocketSession; } });
Object.defineProperty(exports, "BasicGs2Credential", { enumerable: true, get: function () { return model_1.BasicGs2Credential; } });
Object.defineProperty(exports, "ProjectTokenGs2Credential", { enumerable: true, get: function () { return model_1.ProjectTokenGs2Credential; } });
Object.defineProperty(exports, "Region", { enumerable: true, get: function () { return model_1.Region; } });
var AcquireActionResult_1 = tslib_1.__importDefault(require("./AcquireActionResult"));
exports.AcquireActionResult = AcquireActionResult_1.default;
var ConsumeActionResult_1 = tslib_1.__importDefault(require("./ConsumeActionResult"));
exports.ConsumeActionResult = ConsumeActionResult_1.default;
var VerifyActionResult_1 = tslib_1.__importDefault(require("./VerifyActionResult"));
exports.VerifyActionResult = VerifyActionResult_1.default;
var TransactionResult_1 = tslib_1.__importDefault(require("./TransactionResult"));
exports.TransactionResult = TransactionResult_1.default;
//# sourceMappingURL=index.js.map