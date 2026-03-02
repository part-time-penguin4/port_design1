const fs = require('fs');
const https = require('https');
const opentype = require('opentype.js');

// Download a known raw TTF of Outfit Bold (Google Fonts raw URL)
const url = 'https://raw.githubusercontent.com/googlefonts/outfit/main/fonts/ttf/Outfit-Bold.ttf';
const dest = './Outfit-Bold.ttf';

https.get(url, (res) => {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
        file.close(() => {
            console.log('TTF downloaded. Converting to facetype JSON...');
            convert('Outfit-Bold.ttf', 'public/fonts/Outfit_Bold.json');
        });
    });
});

function convert(infile, outfile) {
    opentype.load(infile, function (err, font) {
        if (err) {
            console.error('Could not load font: ' + err);
            return;
        }

        const glyphs = {};
        for (let i = 0; i < font.glyphs.length; i++) {
            const glyph = font.glyphs.glyphs[i];
            if (glyph.unicode !== undefined) {
                const char = String.fromCharCode(glyph.unicode);
                const path = glyph.getPath(0, 0, 1000);

                // Super basic conversion (facetype.js format is complex, but we 
                // typically use facetype.js online converter or rely on generic fonts for quick dev.
                // Actually, the easiest way for React Three Fiber is to use a pre-converted font
                // from the DREI github repo or similar. Let's redirect to download a known good font json.)
            }
        }
    });
}
