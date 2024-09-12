export declare const ALPHA_NOSPACE_REGEX: RegExp;
export declare const validateInteger: ({ value, name, label }: {
    value: any;
    name: string;
    label: string;
}) => string | {
    [x: string]: string;
} | null;
export declare const validateMinMax: ({ value, name, label, min, max, minError, maxError }: {
    value: any;
    name: string;
    label: string;
    min?: number | undefined;
    max?: number | undefined;
    minError?: string | undefined;
    maxError?: string | undefined;
}) => {
    [x: string]: string;
} | null;
export declare const validateRegex: ({ value, name, label, regex, regexError }: {
    value: any;
    name: string;
    label: string;
    regex: RegExp;
    regexError?: string | undefined;
}) => string | {
    [x: string]: string;
} | null;
export declare function validateRegexPattern({ value, name, label }: {
    value: string;
    name: string;
    label: string;
}): {
    [x: string]: string;
} | null;
export declare const validateRequired: ({ value, name, label, requiredError }: {
    value: any;
    name: string;
    label: string;
    requiredError?: string | undefined;
}) => {
    [x: string]: string;
} | null;
export declare const validateExcluded: ({ value, name, label, list, excludedError }: {
    value: any;
    name: string;
    label: string;
    list?: any[] | undefined;
    excludedError?: string | undefined;
}) => string | {
    [x: string]: string;
} | null;
export declare const validateBlankString: ({ value, name, label }: {
    value: any;
    name: string;
    label: string;
}) => {
    [x: string]: string;
} | null;
export declare const validateMaxLength: ({ value, name, label, maxLength, maxLengthError }: {
    value: any;
    name: string;
    label: string;
    maxLength: number;
    maxLengthError?: string | undefined;
}) => string | {
    [x: string]: string;
} | null;
