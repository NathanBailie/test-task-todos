import { type Options } from './types/types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function createDevServer(options: Options): DevServerConfiguration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
        hot: true,
    };
}
