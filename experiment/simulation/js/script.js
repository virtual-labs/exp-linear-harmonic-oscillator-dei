
// Canvas and context
const theCanvas = document.getElementById("theCanvas");
const theContext = theCanvas.getContext("2d");

// UI Elements
const speedSlider = document.getElementById("speedSlider");
const alphaSlider = document.getElementById("alphaSlider");
const statusBadge = document.getElementById("statusBadge");
const statusText = document.getElementById("statusText");
const playPauseBtn = document.getElementById("playPauseBtn");

// Simulation parameters
let iMax = theCanvas.width;
const pxPerX = 80;
const clockSpaceFraction = 0.22;
const clockRadiusFraction = 0.4;
let clockSpaceHeight = theCanvas.height * clockSpaceFraction;
let clockPixelRadius = clockSpaceHeight * clockRadiusFraction;

let psi = { re: new Array(iMax + 1), im: new Array(iMax + 1) };
let nMax = 7;
let eigenPsi = [];
let amplitude = [];
let phase = [];

const nColors = 360;
let phaseColor = new Array(nColors + 1);

let running = true;
let mouseIsDown = false;
let mouseClock = 0;
let displayMode = 'densityPhase';

// Event listeners
theCanvas.addEventListener('mousedown', mouseDown, false);
document.body.addEventListener('mousemove', mouseMove, false);
document.body.addEventListener('mouseup', mouseUp, false);
theCanvas.addEventListener('touchstart', touchStart, false);
document.body.addEventListener('touchmove', touchMove, false);
document.body.addEventListener('touchend', mouseUp, false);

// Initialize
init();
createStateControls();
nextFrame();

function init() {
    // Initialize arrays
    eigenPsi = [];
    amplitude = [];
    phase = [];

    for (let n = 0; n <= nMax; n++) {
        eigenPsi[n] = new Array(iMax + 1);
        amplitude[n] = 0;
        phase[n] = 0;
    }

    // Calculate eigenfunctions
    for (let i = 0; i <= iMax; i++) {
        const x = (i - iMax / 2) / pxPerX;
        eigenPsi[0][i] = Math.exp(-x * x / 2);
        if (nMax >= 1) eigenPsi[1][i] = Math.sqrt(2) * x * eigenPsi[0][i];
        if (nMax >= 2) eigenPsi[2][i] = (1 / Math.sqrt(2)) * (2 * x * x - 1) * eigenPsi[0][i];
        if (nMax >= 3) eigenPsi[3][i] = (1 / Math.sqrt(3)) * (2 * x * x * x - 3 * x) * eigenPsi[0][i];
        if (nMax >= 4) eigenPsi[4][i] = (1 / Math.sqrt(24)) * (4 * x * x * x * x - 12 * x * x + 3) * eigenPsi[0][i];
        if (nMax >= 5) eigenPsi[5][i] = (1 / Math.sqrt(60)) * (4 * Math.pow(x, 5) - 20 * x * x * x + 15 * x) * eigenPsi[0][i];
        if (nMax >= 6) eigenPsi[6][i] = (1 / Math.sqrt(720)) * (8 * Math.pow(x, 6) - 60 * x * x * x * x + 90 * x * x - 15) * eigenPsi[0][i];
        if (nMax >= 7) eigenPsi[7][i] = (1 / Math.sqrt(36 * 70)) * (8 * Math.pow(x, 7) - 84 * Math.pow(x, 5) + 210 * x * x * x - 105 * x) * eigenPsi[0][i];
    }

    // Default superposition
    amplitude[0] = 1 / Math.sqrt(2);
    amplitude[1] = 1 / Math.sqrt(2);

    // Initialize colors
    for (let c = 0; c <= nColors; c++) {
        phaseColor[c] = colorString(c / nColors);
    }
}

function createStateControls() {
    const container = document.getElementById('stateControls');
    container.innerHTML = '';

    for (let n = 0; n <= Math.min(nMax, 7); n++) {
        const div = document.createElement('div');
        div.className = 'control-group';
        div.innerHTML = `
                <div class="control-label">
                    <span>n = ${n}</span>
                    <span class="control-value" id="ampValue${n}">${amplitude[n].toFixed(2)}</span>
                </div>
                <input type="range" id="ampSlider${n}" min="0" max="1" step="0.01" value="${amplitude[n]}"
                       oninput="setAmplitude(${n}, this.value)">
            `;
        container.appendChild(div);
    }
}

function setAmplitude(n, value) {
    amplitude[n] = parseFloat(value);
    document.getElementById(`ampValue${n}`).textContent = amplitude[n].toFixed(2);
    buildPsi();
    paintCanvas();
    updateDataTable();
}

function nextFrame() {
    for (let n = 0; n <= nMax; n++) {
        phase[n] -= (n + 0.5) * Number(speedSlider.value);
        if (phase[n] < 0) phase[n] += 2 * Math.PI;
    }
    buildPsi();
    paintCanvas();
    updateDataTable();
    if (running) window.setTimeout(nextFrame, 1000 / 30);
}

function buildPsi() {
    for (let i = 0; i <= iMax; i++) {
        psi.re[i] = 0;
        psi.im[i] = 0;
    }
    for (let n = 0; n <= nMax; n++) {
        const realPart = amplitude[n] * Math.cos(phase[n]);
        const imagPart = amplitude[n] * Math.sin(phase[n]);
        for (let i = 0; i <= iMax; i++) {
            if (eigenPsi[n]) {
                psi.re[i] += realPart * eigenPsi[n][i];
                psi.im[i] += imagPart * eigenPsi[n][i];
            }
        }
    }
}

function paintCanvas() {
    // Clear canvas with gradient background
    const gradient = theContext.createLinearGradient(0, 0, 0, theCanvas.height);
    gradient.addColorStop(0, '#0a0a15');
    gradient.addColorStop(1, '#1a1a2e');
    theContext.fillStyle = gradient;
    theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);

    // Draw grid
    theContext.strokeStyle = 'rgba(99, 102, 241, 0.1)';
    theContext.lineWidth = 1;
    for (let x = 0; x <= theCanvas.width; x += 50) {
        theContext.beginPath();
        theContext.moveTo(x, 0);
        theContext.lineTo(x, theCanvas.height - clockSpaceHeight);
        theContext.stroke();
    }
    for (let y = 0; y <= theCanvas.height - clockSpaceHeight; y += 50) {
        theContext.beginPath();
        theContext.moveTo(0, y);
        theContext.lineTo(theCanvas.width, y);
        theContext.stroke();
    }

    let baselineY, pxPerY;

    if (displayMode === 'realImag') {
        baselineY = theCanvas.height * (1 - clockSpaceFraction) / 2;
        pxPerY = baselineY * 0.85;

        // Draw axis
        theContext.strokeStyle = 'rgba(148, 163, 184, 0.3)';
        theContext.lineWidth = 1;
        theContext.beginPath();
        theContext.moveTo(0, baselineY);
        theContext.lineTo(theCanvas.width, baselineY);
        theContext.stroke();

        // Draw real part with glow
        theContext.shadowColor = 'rgba(255, 192, 0, 0.5)';
        theContext.shadowBlur = 10;
        theContext.lineWidth = 3;
        theContext.beginPath();
        theContext.moveTo(0, baselineY - psi.re[0] * pxPerY);
        for (let i = 1; i <= iMax; i++) {
            theContext.lineTo(i, baselineY - psi.re[i] * pxPerY);
        }
        theContext.strokeStyle = '#ffc000';
        theContext.stroke();

        // Draw imaginary part with glow
        theContext.shadowColor = 'rgba(34, 211, 238, 0.5)';
        theContext.beginPath();
        theContext.moveTo(0, baselineY - psi.im[0] * pxPerY);
        for (let i = 1; i <= iMax; i++) {
            theContext.lineTo(i, baselineY - psi.im[i] * pxPerY);
        }
        theContext.strokeStyle = '#22d3ee';
        theContext.stroke();

        theContext.shadowBlur = 0;

        // Legend
        theContext.fillStyle = '#ffc000';
        theContext.fillRect(20, 20, 16, 4);
        theContext.fillStyle = '#94a3b8';
        theContext.font = '12px Inter';
        theContext.fillText('Real ψ', 42, 25);

        theContext.fillStyle = '#22d3ee';
        theContext.fillRect(100, 20, 16, 4);
        theContext.fillText('Imag ψ', 122, 25);

    } else {
        // Density/Phase mode
        baselineY = theCanvas.height * (1 - clockSpaceFraction);
        pxPerY = baselineY * 0.5;

        theContext.lineWidth = 2;
        for (let i = 0; i <= iMax; i++) {
            theContext.beginPath();
            theContext.moveTo(i, baselineY);
            const prob = psi.re[i] * psi.re[i] + psi.im[i] * psi.im[i];
            theContext.lineTo(i, baselineY - pxPerY * prob);
            let localPhase = Math.atan2(psi.im[i], psi.re[i]);
            if (localPhase < 0) localPhase += 2 * Math.PI;
            theContext.strokeStyle = phaseColor[Math.round(localPhase * nColors / (2 * Math.PI))];
            theContext.stroke();
        }

        // Legend
        theContext.fillStyle = '#94a3b8';
        theContext.font = '12px Inter';
        theContext.fillText('|ψ|² (Probability Density)', 20, 25);
    }

    // Draw phasor background
    theContext.fillStyle = 'rgba(15, 15, 26, 0.9)';
    theContext.fillRect(0, theCanvas.height - clockSpaceHeight, theCanvas.width, clockSpaceHeight);

    // Separator line
    theContext.strokeStyle = 'rgba(99, 102, 241, 0.3)';
    theContext.lineWidth = 2;
    theContext.beginPath();
    theContext.moveTo(0, theCanvas.height - clockSpaceHeight);
    theContext.lineTo(theCanvas.width, theCanvas.height - clockSpaceHeight);
    theContext.stroke();

    // Draw phasor clocks
    const phasorSpace = clockSpaceHeight;
    const clockRadius = phasorSpace * clockRadiusFraction;

    for (let n = 0; n <= Math.min(nMax, 7); n++) {
        const centerX = (n + 0.5) * phasorSpace + 20;
        const centerY = theCanvas.height - 0.5 * phasorSpace;

        // Clock background
        theContext.beginPath();
        theContext.arc(centerX, centerY, clockRadius + 2, 0, 2 * Math.PI);
        theContext.fillStyle = 'rgba(99, 102, 241, 0.1)';
        theContext.fill();

        // Clock circle
        theContext.beginPath();
        theContext.arc(centerX, centerY, clockRadius, 0, 2 * Math.PI);
        theContext.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        theContext.lineWidth = 1;
        theContext.stroke();

        // Clock hand
        theContext.beginPath();
        theContext.moveTo(centerX, centerY);
        const handX = centerX + clockRadius * amplitude[n] * Math.cos(phase[n]);
        const handY = centerY - clockRadius * amplitude[n] * Math.sin(phase[n]);
        theContext.lineTo(handX, handY);
        theContext.strokeStyle = phaseColor[Math.round(phase[n] * nColors / (2 * Math.PI))];
        theContext.lineWidth = 3;
        theContext.shadowColor = theContext.strokeStyle;
        theContext.shadowBlur = 8;
        theContext.stroke();
        theContext.shadowBlur = 0;

        // Clock center dot
        theContext.beginPath();
        theContext.arc(centerX, centerY, 3, 0, 2 * Math.PI);
        theContext.fillStyle = '#fff';
        theContext.fill();

        // Label
        theContext.fillStyle = '#94a3b8';
        theContext.font = '11px JetBrains Mono';
        theContext.textAlign = 'center';
        theContext.fillText(`n=${n}`, centerX, theCanvas.height - 8);
    }

    // Mouse feedback
    if (mouseIsDown) {
        document.getElementById('mouseFeedback').style.display = 'block';
        document.getElementById('selectedN').textContent = mouseClock;
        document.getElementById('selectedMag').textContent = amplitude[mouseClock].toFixed(3);
        document.getElementById('selectedPhase').textContent = Math.round(phase[mouseClock] * 180 / Math.PI) + '°';
    }
}

function updateDataTable() {
    const tbody = document.getElementById('dataTableBody');
    tbody.innerHTML = '';

    let totalProb = 0;
    let avgEnergy = 0;

    for (let n = 0; n <= Math.min(nMax, 7); n++) {
        const prob = amplitude[n] * amplitude[n];
        totalProb += prob;
        avgEnergy += prob * (n + 0.5);

        const row = document.createElement('tr');
        row.innerHTML = `
                <td>n = ${n}</td>
                <td class="data-value">${amplitude[n].toFixed(3)}</td>
                <td>${prob.toFixed(3)}</td>
            `;
        tbody.appendChild(row);
    }

    document.getElementById('totalProb').textContent = totalProb.toFixed(3);
    document.getElementById('probBar').style.width = (totalProb * 100) + '%';
    document.getElementById('avgEnergy').textContent = avgEnergy.toFixed(3) + ' ℏω';
}

// Mouse/Touch handlers
function setMouseClock(relX, relY) {
    mouseIsDown = true;
    const pixelDistance = Math.sqrt(relX * relX + relY * relY);
    amplitude[mouseClock] = Math.min(pixelDistance / clockPixelRadius, 1);
    phase[mouseClock] = Math.atan2(relY, relX);
    if (phase[mouseClock] < 0) phase[mouseClock] += 2 * Math.PI;

    // Update slider
    const slider = document.getElementById(`ampSlider${mouseClock}`);
    const value = document.getElementById(`ampValue${mouseClock}`);
    if (slider) {
        slider.value = amplitude[mouseClock];
        value.textContent = amplitude[mouseClock].toFixed(2);
    }

    buildPsi();
    paintCanvas();
}

function mouseOrTouchStart(pageX, pageY, e) {
    const rect = theCanvas.getBoundingClientRect();
    const canvasY = pageY - rect.top;

    if (canvasY > theCanvas.height - clockSpaceHeight) {
        const phasorSpace = clockSpaceHeight;
        mouseClock = Math.floor((pageX - rect.left - 20) / phasorSpace);
        mouseClock = Math.max(0, Math.min(mouseClock, nMax));

        const clockCenterX = (mouseClock + 0.5) * phasorSpace + 20;
        const clockCenterY = theCanvas.height - 0.5 * phasorSpace;
        const relX = pageX - rect.left - clockCenterX;
        const relY = clockCenterY - canvasY;

        if (relX * relX + relY * relY <= clockPixelRadius * clockPixelRadius * 2) {
            setMouseClock(relX, relY);
            e.preventDefault();
        }
    }
}

function mouseOrTouchMove(pageX, pageY, e) {
    if (mouseIsDown) {
        const rect = theCanvas.getBoundingClientRect();
        const phasorSpace = clockSpaceHeight;
        const clockCenterX = (mouseClock + 0.5) * phasorSpace + 20;
        const clockCenterY = theCanvas.height - 0.5 * phasorSpace;
        const relX = pageX - rect.left - clockCenterX;
        const relY = clockCenterY - (pageY - rect.top);
        setMouseClock(relX, relY);
        e.preventDefault();
    }
}

function mouseDown(e) { mouseOrTouchStart(e.pageX, e.pageY, e); }
function touchStart(e) { mouseOrTouchStart(e.targetTouches[0].pageX, e.targetTouches[0].pageY, e); }
function mouseMove(e) { mouseOrTouchMove(e.pageX, e.pageY, e); }
function touchMove(e) { mouseOrTouchMove(e.targetTouches[0].pageX, e.targetTouches[0].pageY, e); }

function mouseUp(e) {
    mouseIsDown = false;
    document.getElementById('mouseFeedback').style.display = 'none';
    paintCanvas();
}

// Control functions
function startStop() {
    running = !running;
    if (running) {
        playPauseBtn.innerHTML = '⏸️ Pause';
        statusText.textContent = 'Running';
        statusBadge.classList.remove('paused');
        nextFrame();
    } else {
        playPauseBtn.innerHTML = '▶️ Resume';
        statusText.textContent = 'Paused';
        statusBadge.classList.add('paused');
    }
}

function updateSpeed() {
    document.getElementById('speedValue').textContent = speedSlider.value;
}

function updateAlpha() {
    document.getElementById('alphaValue').textContent = parseFloat(alphaSlider.value).toFixed(1);
}

function adjustNMax(delta) {
    const input = document.getElementById('nMaxInput');
    let newValue = parseInt(input.value) + delta;
    newValue = Math.max(1, Math.min(10, newValue));
    input.value = newValue;
    updateNMax();
}

function updateNMax() {
    nMax = parseInt(document.getElementById('nMaxInput').value);
    init();
    createStateControls();
    buildPsi();
    paintCanvas();
}

function zero() {
    for (let n = 0; n <= nMax; n++) {
        amplitude[n] = 0;
    }
    createStateControls();
    buildPsi();
    paintCanvas();
}

function normalizePsi() {
    let norm2 = 0;
    for (let n = 0; n <= nMax; n++) {
        norm2 += amplitude[n] * amplitude[n];
    }
    if (norm2 > 0) {
        for (let n = 0; n <= nMax; n++) {
            amplitude[n] /= Math.sqrt(norm2);
        }
        createStateControls();
        buildPsi();
        paintCanvas();
    }
}

function coherent() {
    const alphaMag = parseFloat(alphaSlider.value);
    let nFact = 1;
    for (let n = 0; n <= nMax; n++) {
        if (n > 0) nFact *= n;
        amplitude[n] = Math.pow(alphaMag, n) / Math.sqrt(nFact);
        phase[n] = 0;
    }
    normalizePsi();
    createStateControls();
}

function setGroundState() {
    zero();
    amplitude[0] = 1;
    createStateControls();
    buildPsi();
    paintCanvas();
}

function setFirstExcited() {
    zero();
    amplitude[1] = 1;
    createStateControls();
    buildPsi();
    paintCanvas();
}

function setSuperposition() {
    zero();
    amplitude[0] = 1 / Math.sqrt(2);
    amplitude[1] = 1 / Math.sqrt(2);
    createStateControls();
    buildPsi();
    paintCanvas();
}

function setEqualMix() {
    const val = 1 / Math.sqrt(nMax + 1);
    for (let n = 0; n <= nMax; n++) {
        amplitude[n] = val;
        phase[n] = 0;
    }
    createStateControls();
    buildPsi();
    paintCanvas();
}

function setHighEnergy() {
    zero();
    amplitude[nMax] = 1;
    createStateControls();
    buildPsi();
    paintCanvas();
}

function randomState() {
    for (let n = 0; n <= nMax; n++) {
        amplitude[n] = Math.random();
        phase[n] = Math.random() * 2 * Math.PI;
    }
    normalizePsi();
    createStateControls();
}

function resetSimulation() {
    nMax = 7;
    document.getElementById('nMaxInput').value = 7;
    speedSlider.value = 0.05;
    alphaSlider.value = 1;
    updateSpeed();
    updateAlpha();
    init();
    createStateControls();
    amplitude[0] = 1 / Math.sqrt(2);
    amplitude[1] = 1 / Math.sqrt(2);
    buildPsi();
    paintCanvas();
    if (!running) startStop();
}

function setDisplayMode(mode) {
    displayMode = mode;
    document.getElementById('realImagBtn').classList.toggle('active', mode === 'realImag');
    document.getElementById('densityPhaseBtn').classList.toggle('active', mode === 'densityPhase');
    paintCanvas();
}

// Color utility
function twoDigitHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function colorString(hue) {
    let r, g, b;
    if (hue < 1 / 6) {
        r = 255; g = Math.round(hue * 6 * 255); b = 0;
    } else if (hue < 1 / 3) {
        r = Math.round((1 / 3 - hue) * 6 * 255); g = 255; b = 0;
    } else if (hue < 1 / 2) {
        r = 0; g = 255; b = Math.round((hue - 1 / 3) * 6 * 255);
    } else if (hue < 2 / 3) {
        r = 0; g = Math.round((2 / 3 - hue) * 6 * 255); b = 255;
    } else if (hue < 5 / 6) {
        r = Math.round((hue - 2 / 3) * 6 * 255); g = 0; b = 255;
    } else {
        r = 255; g = 0; b = Math.round((1 - hue) * 6 * 255);
    }
    return "#" + twoDigitHex(r) + twoDigitHex(g) + twoDigitHex(b);
}
