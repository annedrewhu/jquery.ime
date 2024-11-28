( function ( $ ) {
	'use strict';

	var osaTransliteration = {
		id: 'osa-transliteration',
		name: '𐓏𐓘𐓻𐓘𐓻𐓟 𐒻𐓟 / Wažáže Ie IME',
		description: 'Osage Alphabet (2014) transliteration IME',
		date: '2024-11-19',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Anne Drew Hu',
		license: 'MIT',
		version: '1.0',
		maxKeyLength: 4,
		patterns: [
			[ 'Br', '𐒴' ],
			[ 'Cv', '𐒵' ],
			[ 'Gh', '𐓑' ],
			[ 'Hc', '𐓋' ],
			[ 'Ht', '𐓉' ],
			[ 'Hp', '𐓅' ],
			[ 'Hk', '𐒽' ],
			[ 'Hcv', '𐒶' ],
			[ 'Hy', '𐒺' ],
			[ 'H', '𐒹' ],
			[ 'Ksv', '𐒼𐓇' ],
			[ 'Kx', '𐒼𐓐' ],
			[ 'K\'', '𐒼ʼ' ],
			[ 'Ky( )?', '𐒾' ],
			[ 'K( )?', '𐒼' ],
			[ 'L', '𐒿' ],
			[ 'M', '𐓀' ],
			[ 'N', '𐓁' ],
			[ 'Sv', '𐓇' ],
			[ 'S', '𐓆' ],
			[ 'Psv', '𐓄𐓇' ],
			[ 'Px', '𐓄𐓐' ],
			[ 'P\'', '𐓄ʼ' ],
			[ 'P', '𐓄' ],
			[ 'W', '𐓏' ],
			[ 'Ch', '𐓌' ],
			[ 'C\'', '𐓊ʼ' ],
			[ 'Ts', '𐓊' ],
			[ 'C', '𐓊' ],
			[ 'D', '𐓍' ],
			[ 'Tx', '𐓈𐓐' ],
			[ 'T', '𐓈' ],
			[ 'X', '𐓐' ],
			[ 'Z', '𐓒' ],
			[ 'Zv', '𐓓' ],  
			[ '[fj]', '͘' ],  // U+0358 COMBINING DOT ABOVE RIGHT
			[ '[FJ]', '̄' ],  // U+0304 COMBINING MACRON
			[ '}', '́' ],  // U+0301 COMBINING ACUTE ACCENT
			[ '{', '̋' ],  // U+030B COMBINING DOUBLE ACUTE ACCENT
			[ 'Ai', '𐒱' ],
			[ '𐒱͘', '𐒲' ],
			[ 'A', '𐒰' ],
			[ 'Y', '𐒳' ],  // TODO: test for "k y" vs "ky"
			[ 'E', '𐒷' ],
			[ '𐒷͘', '𐒸' ], // 𐒷 + Combining dot above right
			[ 'I', '𐒻' ],
			[ 'Oi', '𐓃' ],
			[ 'U', '𐓎' ],
			// Lowercase
		]
	};

	$.ime.register( osaTransliteration );
}( jQuery ) );
