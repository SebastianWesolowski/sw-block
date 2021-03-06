const { __ } = wp.i18n;

import Edit from './edit';
import { save } from './save';
import { MarkdownIcon } from './icons';

import pluginConsts from '../../plugin-consts';

export const name = 'tinyblocks/markdown';

export const settings = {
	title: __( `${ pluginConsts.pluginName }` + 'wp-example-block', 'tiny-pixel' ),
	description: __( 'Express yourself', 'tiny-pixel' ),
	category: 'common',
	keywords: [
		__( 'markdown', 'tiny-pixel' ),
		__( 'Tiny Pixel', 'tiny-pixel' ),
		__( 'code', 'tiny-pixel' ),
	],
	icon: {
		background: '#123123',
		color: '#fff',
		src: <MarkdownIcon width={ 48 } height={ 48 } />,
	},
	edit: Edit,
	save,
	attributes: {
		markdownRendered: {
			type: 'string',
			source: 'html',
			selector: '.md__rendered',
		},
		markdownRaw: {
			type: 'string',
			source: 'text',
			selector: '.md__raw',
			default: '',
		},
	},
	supports: {
		align: [
			'full',
		],
	},
};
