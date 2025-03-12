import { Options } from './types/types';
import { type ResolveOptions } from 'webpack';

export function createResolvers(options: Options): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
    };
}
