import { PropType } from 'vue';
import { Block, BlockType } from '@/utils/types';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            block: Block;
            readonly: boolean;
            blockTypes: string[] | null;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            block: {
                type: PropType<Block>;
                default: {
                    type: BlockType;
                    details: {
                        value: string;
                    };
                };
            };
            blockTypes: {
                type: PropType<string[] | null>;
                default: null;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onSetBlockType?: ((...args: any[]) => any) | undefined;
            onDeleteBlock?: ((...args: any[]) => any) | undefined;
            onNewBlock?: ((...args: any[]) => any) | undefined;
            onMoveToPrevChar?: ((...args: any[]) => any) | undefined;
            onMoveToNextChar?: ((...args: any[]) => any) | undefined;
            onMoveToPrevLine?: ((...args: any[]) => any) | undefined;
            onMoveToNextLine?: ((...args: any[]) => any) | undefined;
            onMerge?: ((...args: any[]) => any) | undefined;
            onSplit?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "block" | "readonly" | "blockTypes">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "setBlockType" | "deleteBlock" | "newBlock" | "moveToPrevChar" | "moveToNextChar" | "moveToPrevLine" | "moveToNextLine" | "merge" | "split", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            block: {
                type: PropType<Block>;
                default: {
                    type: BlockType;
                    details: {
                        value: string;
                    };
                };
            };
            blockTypes: {
                type: PropType<string[] | null>;
                default: null;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onSetBlockType?: ((...args: any[]) => any) | undefined;
            onDeleteBlock?: ((...args: any[]) => any) | undefined;
            onNewBlock?: ((...args: any[]) => any) | undefined;
            onMoveToPrevChar?: ((...args: any[]) => any) | undefined;
            onMoveToNextChar?: ((...args: any[]) => any) | undefined;
            onMoveToPrevLine?: ((...args: any[]) => any) | undefined;
            onMoveToNextLine?: ((...args: any[]) => any) | undefined;
            onMerge?: ((...args: any[]) => any) | undefined;
            onSplit?: ((...args: any[]) => any) | undefined;
        }, {
            content: any;
            getTextContent: () => any;
            getHtmlContent: () => any;
            moveToStart: () => void;
            moveToEnd: () => void;
            moveToFirstLine: () => Promise<void>;
            moveToLastLine: () => Promise<void>;
            getCaretPos: () => {
                pos: number;
                tag: string | null;
            } | {
                pos: number;
                tag?: undefined;
            };
            setCaretPos: (caretPos: number) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("setBlockType" | "deleteBlock" | "newBlock" | "moveToPrevChar" | "moveToNextChar" | "moveToPrevLine" | "moveToNextLine" | "merge" | "split")[], string, {
            block: Block;
            readonly: boolean;
            blockTypes: string[] | null;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        block: {
            type: PropType<Block>;
            default: {
                type: BlockType;
                details: {
                    value: string;
                };
            };
        };
        blockTypes: {
            type: PropType<string[] | null>;
            default: null;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onSetBlockType?: ((...args: any[]) => any) | undefined;
        onDeleteBlock?: ((...args: any[]) => any) | undefined;
        onNewBlock?: ((...args: any[]) => any) | undefined;
        onMoveToPrevChar?: ((...args: any[]) => any) | undefined;
        onMoveToNextChar?: ((...args: any[]) => any) | undefined;
        onMoveToPrevLine?: ((...args: any[]) => any) | undefined;
        onMoveToNextLine?: ((...args: any[]) => any) | undefined;
        onMerge?: ((...args: any[]) => any) | undefined;
        onSplit?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        content: any;
        getTextContent: () => any;
        getHtmlContent: () => any;
        moveToStart: () => void;
        moveToEnd: () => void;
        moveToFirstLine: () => Promise<void>;
        moveToLastLine: () => Promise<void>;
        getCaretPos: () => {
            pos: number;
            tag: string | null;
        } | {
            pos: number;
            tag?: undefined;
        };
        setCaretPos: (caretPos: number) => void;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    block: {
        type: PropType<Block>;
        default: {
            type: BlockType;
            details: {
                value: string;
            };
        };
    };
    blockTypes: {
        type: PropType<string[] | null>;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSetBlockType?: ((...args: any[]) => any) | undefined;
    onDeleteBlock?: ((...args: any[]) => any) | undefined;
    onNewBlock?: ((...args: any[]) => any) | undefined;
    onMoveToPrevChar?: ((...args: any[]) => any) | undefined;
    onMoveToNextChar?: ((...args: any[]) => any) | undefined;
    onMoveToPrevLine?: ((...args: any[]) => any) | undefined;
    onMoveToNextLine?: ((...args: any[]) => any) | undefined;
    onMerge?: ((...args: any[]) => any) | undefined;
    onSplit?: ((...args: any[]) => any) | undefined;
}, {
    content: any;
    getTextContent: () => any;
    getHtmlContent: () => any;
    moveToStart: () => void;
    moveToEnd: () => void;
    moveToFirstLine: () => Promise<void>;
    moveToLastLine: () => Promise<void>;
    getCaretPos: () => {
        pos: number;
        tag: string | null;
    } | {
        pos: number;
        tag?: undefined;
    };
    setCaretPos: (caretPos: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("setBlockType" | "deleteBlock" | "newBlock" | "moveToPrevChar" | "moveToNextChar" | "moveToPrevLine" | "moveToNextLine" | "merge" | "split")[], "split" | "setBlockType" | "deleteBlock" | "newBlock" | "moveToPrevChar" | "moveToNextChar" | "moveToPrevLine" | "moveToNextLine" | "merge", {
    block: Block;
    readonly: boolean;
    blockTypes: string[] | null;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
