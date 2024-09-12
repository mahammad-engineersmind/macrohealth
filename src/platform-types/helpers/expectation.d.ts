import { FileExpectation } from '../types';

export type FileExpectationRequest = Omit<FileExpectation, 'integrationId' | 'id'>;
