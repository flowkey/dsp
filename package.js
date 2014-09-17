Package.describe({
    summary: "DSP Library packed for meteor",
    version: "1.0.0",
    git: "https://github.com/flowkey/dsp.git"
});

Package.onUse(function(api) {
    api.addFiles('dsp.js');
    api.export('DSP');
    api.export('DFT');
    api.export('FFT');
    api.export('Oscillator');
    api.export('ADSR');
    api.export('IIRFilter');
    api.export('MultiDelay');
    api.export('WindowFunction');
});