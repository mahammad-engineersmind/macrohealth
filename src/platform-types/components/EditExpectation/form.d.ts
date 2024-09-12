import { FileExpectation } from '../../types';
import { FileExpectationForm } from '.';

export declare const buildValidateFileExpectationForm: (fileExpectations: Array<FileExpectation>) => (values: FileExpectationForm) => Promise<{}>;
