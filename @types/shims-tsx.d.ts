/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line no-unused-vars
import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // eslint-disable-next-line prettier/prettier
        interface Element extends VNode { }
        // eslint-disable-next-line prettier/prettier
        interface ElementClass extends Vue { }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
