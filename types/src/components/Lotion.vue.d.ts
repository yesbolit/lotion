import { PropType } from 'vue';
import { Block } from '@/utils/types';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly: boolean;
            blockTypes: string[] | null;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            page: {
                type: PropType<{
                    name: string;
                    blocks: Block[];
                }>;
                required: true;
            };
            blockTypes: {
                type: PropType<string[] | null>;
                default: null;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSetAll: {
                type: PropType<(block: Block) => void>;
            };
            onUnsetAll: {
                type: PropType<(block: Block) => void>;
            };
            onCreateBlock: {
                type: PropType<(block: Block) => void>;
            };
            onDeleteBlock: {
                type: PropType<(block: Block) => void>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "readonly" | "blockTypes">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            page: {
                type: PropType<{
                    name: string;
                    blocks: Block[];
                }>;
                required: true;
            };
            blockTypes: {
                type: PropType<string[] | null>;
                default: null;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSetAll: {
                type: PropType<(block: Block) => void>;
            };
            onUnsetAll: {
                type: PropType<(block: Block) => void>;
            };
            onCreateBlock: {
                type: PropType<(block: Block) => void>;
            };
            onDeleteBlock: {
                type: PropType<(block: Block) => void>;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
        page: {
            type: PropType<{
                name: string;
                blocks: Block[];
            }>;
            required: true;
        };
        blockTypes: {
            type: PropType<string[] | null>;
            default: null;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        onSetAll: {
            type: PropType<(block: Block) => void>;
        };
        onUnsetAll: {
            type: PropType<(block: Block) => void>;
        };
        onCreateBlock: {
            type: PropType<(block: Block) => void>;
        };
        onDeleteBlock: {
            type: PropType<(block: Block) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: PropType<{
            name: string;
            blocks: Block[];
        }>;
        required: true;
    };
    blockTypes: {
        type: PropType<string[] | null>;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    onSetAll: {
        type: PropType<(block: Block) => void>;
    };
    onUnsetAll: {
        type: PropType<(block: Block) => void>;
    };
    onCreateBlock: {
        type: PropType<(block: Block) => void>;
    };
    onDeleteBlock: {
        type: PropType<(block: Block) => void>;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    readonly: boolean;
    blockTypes: string[] | null;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
