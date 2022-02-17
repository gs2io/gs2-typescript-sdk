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
var tslib_1 = require("tslib");
var AbstractGs2RestClient_1 = (0, tslib_1.__importDefault)(require("./AbstractGs2RestClient"));
var model_1 = require("./model");
exports.default = {
    AbstractGs2Client: AbstractGs2RestClient_1.default,
    Gs2RestSession: model_1.Gs2RestSession,
    BasicGs2Credential: model_1.BasicGs2Credential,
    ProjectTokenGs2Credential: model_1.ProjectTokenGs2Credential,
    Region: model_1.Region,
};
//# sourceMappingURL=index.js.map