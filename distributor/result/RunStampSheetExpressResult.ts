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

import IResult from '../../core/interface/IResult';

export default class RunStampSheetExpressResult implements IResult {
    private verifyTaskResultCodes: number[]|null = null;
    private verifyTaskResults: string[]|null = null;
    private taskResultCodes: number[]|null = null;
    private taskResults: string[]|null = null;
    private sheetResultCode: number|null = null;
    private sheetResult: string|null = null;

    public getVerifyTaskResultCodes(): number[]|null {
        return this.verifyTaskResultCodes;
    }

    public setVerifyTaskResultCodes(verifyTaskResultCodes: number[]|null) {
        this.verifyTaskResultCodes = verifyTaskResultCodes;
        return this;
    }

    public withVerifyTaskResultCodes(verifyTaskResultCodes: number[]|null): this {
        this.verifyTaskResultCodes = verifyTaskResultCodes;
        return this;
    }

    public getVerifyTaskResults(): string[]|null {
        return this.verifyTaskResults;
    }

    public setVerifyTaskResults(verifyTaskResults: string[]|null) {
        this.verifyTaskResults = verifyTaskResults;
        return this;
    }

    public withVerifyTaskResults(verifyTaskResults: string[]|null): this {
        this.verifyTaskResults = verifyTaskResults;
        return this;
    }

    public getTaskResultCodes(): number[]|null {
        return this.taskResultCodes;
    }

    public setTaskResultCodes(taskResultCodes: number[]|null) {
        this.taskResultCodes = taskResultCodes;
        return this;
    }

    public withTaskResultCodes(taskResultCodes: number[]|null): this {
        this.taskResultCodes = taskResultCodes;
        return this;
    }

    public getTaskResults(): string[]|null {
        return this.taskResults;
    }

    public setTaskResults(taskResults: string[]|null) {
        this.taskResults = taskResults;
        return this;
    }

    public withTaskResults(taskResults: string[]|null): this {
        this.taskResults = taskResults;
        return this;
    }

    public getSheetResultCode(): number|null {
        return this.sheetResultCode;
    }

    public setSheetResultCode(sheetResultCode: number|null) {
        this.sheetResultCode = sheetResultCode;
        return this;
    }

    public withSheetResultCode(sheetResultCode: number|null): this {
        this.sheetResultCode = sheetResultCode;
        return this;
    }

    public getSheetResult(): string|null {
        return this.sheetResult;
    }

    public setSheetResult(sheetResult: string|null) {
        this.sheetResult = sheetResult;
        return this;
    }

    public withSheetResult(sheetResult: string|null): this {
        this.sheetResult = sheetResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RunStampSheetExpressResult {
        return new RunStampSheetExpressResult()
            .withVerifyTaskResultCodes(data.verifyTaskResultCodes ?
                data.verifyTaskResultCodes.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withVerifyTaskResults(data.verifyTaskResults ?
                data.verifyTaskResults.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withTaskResultCodes(data.taskResultCodes ?
                data.taskResultCodes.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withTaskResults(data.taskResults ?
                data.taskResults.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withSheetResultCode(data["sheetResultCode"])
            .withSheetResult(data["sheetResult"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "verifyTaskResultCodes": this.getVerifyTaskResultCodes() ?
                this.getVerifyTaskResultCodes()!.map((item: number) => {
                    return item;
                }
            ) : [],
            "verifyTaskResults": this.getVerifyTaskResults() ?
                this.getVerifyTaskResults()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "taskResultCodes": this.getTaskResultCodes() ?
                this.getTaskResultCodes()!.map((item: number) => {
                    return item;
                }
            ) : [],
            "taskResults": this.getTaskResults() ?
                this.getTaskResults()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "sheetResultCode": this.getSheetResultCode(),
            "sheetResult": this.getSheetResult(),
        };
    }
}
