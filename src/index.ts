import { PluginOption } from 'vite';
import createViteDuskHmr from '@xams-framework/vite-plugin-dusk-hmr';

export default function createViteDusk(): PluginOption {
    return [
        createViteDuskHmr(),
    ];
}
