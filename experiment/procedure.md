## Procedure: Quantum Harmonic Oscillator Simulation

### Getting Started

Before you begin, ensure you understand the basic concepts of quantum mechanics and the harmonic oscillator from the Theory section.

---

### Step 1: Understanding the Interface

When you open the simulation, you will see three main panels:

| Panel | Location | Contents |
|-------|----------|----------|
| **Control Panel** | Left | Quantum parameters, preset states, quick actions, state amplitude sliders |
| **Visualization** | Center | Main canvas showing wavefunction, phasor clocks at bottom |
| **Data & Info** | Right | Live quantum data table, instructions, key concepts |

---

### Step 2: Explore Preset Quantum States

Click on the preset buttons to observe different quantum behaviors:

| Preset | Description | What to Observe |
|--------|-------------|-----------------|
| **Ground State (n=0)** | Lowest energy state | No nodes, Gaussian-shaped probability |
| **First Excited (n=1)** | First excited state | One node at center |
| **Superposition** | Equal mix of n=0 and n=1 | Oscillating probability density |
| **Coherent State** | Classical-like oscillation | Wave packet moves back and forth |
| **Equal Mix** | All states equally weighted | Complex interference pattern |
| **High Energy** | Maximum quantum number | Many nodes visible |

---

### Step 3: Control Animation Speed

1. Locate the **Speed slider** in the Quantum Parameters section
2. Move the slider to adjust the time evolution rate
3. Set to **0** to freeze the animation
4. Observe how different energy states rotate at different frequencies

---

### Step 4: Adjust Coherent State Parameter (α)

1. Use the **Coherent State (α)** slider to change the α value
2. Click the **Coherent State** preset button to apply
3. Larger α values create more classical-like behavior
4. Observe:
   - α = 0: Ground state only
   - α = 1-2: Small oscillation
   - α = 3-4: Large classical-like oscillation

---

### Step 5: Interact with Phasor Clocks

The phasor clocks at the bottom of the canvas represent each eigenstate:

1. **Click and drag** inside any clock circle
2. **Distance from center** sets the amplitude |c<sub>n</sub>|
3. **Angle** sets the initial phase of that state
4. Release to see the wavefunction update immediately

**Note:** As you drag, real-time feedback shows:
- Current state number (n)
- Magnitude value
- Phase in degrees

---

### Step 6: Use Individual Amplitude Sliders

1. Scroll down in the left panel to find **State Amplitudes**
2. Each slider controls one eigenstate's amplitude (n=0 to n=7)
3. Adjust multiple sliders to create custom superpositions
4. Click **Normalize** to ensure total probability equals 1

---

### Step 7: Switch Visualization Modes

Toggle between two visualization modes:

| Mode | Button | What It Shows |
|------|--------|---------------|
| **Real/Imaginary** | 📈 Real/Imaginary | Orange line: Real part of ψ; Cyan line: Imaginary part |
| **Density/Phase** | 🌈 Density/Phase | Height shows probability density |ψ|²; Color shows local phase |

---

### Step 8: Analyze Live Data

Observe the **Live Quantum Data** panel on the right:

1. **Table shows:**
   - State number (n)
   - Amplitude value
   - Probability |c<sub>n</sub>|²

2. **Total Probability:** Should equal 1.000 when normalized

3. **Expected Energy ⟨E⟩:** Shows average energy in units of ℏω

---

### Step 9: Perform Experiments

#### Experiment A: Verify Energy Quantization
1. Set **Ground State** preset
2. Note the Expected Energy (should be 0.500 ℏω)
3. Set **First Excited** preset  
4. Note the Expected Energy (should be 1.500 ℏω)
5. Verify the difference is exactly 1.000 ℏω

#### Experiment B: Count Nodes
1. Set each preset state from n=0 to n=7
2. In **Real/Imaginary** mode, count the nodes (zero crossings)
3. Verify: State n has exactly n nodes

#### Experiment C: Observe Coherent State Oscillation
1. Set α = 3 or 4 using the slider
2. Click **Coherent State** preset
3. Switch to **Density/Phase** mode
4. Observe the probability oscillating like a classical particle

---

### Step 10: Record Your Observations

Fill in the observation table below:

| S.No | State (n) | Amplitude | Probability |c<sub>n</sub>|² | Energy E<sub>n</sub>/ℏω |
|------|-----------|-----------|--------------------------|-------------------------|
| 1 | n = 0 | | | |
| 2 | n = 1 | | | |
| 3 | n = 2 | | | |
| 4 | n = 3 | | | |
| 5 | n = 4 | | | |
| 6 | n = 5 | | | |
| 7 | n = 6 | | | |
| 8 | n = 7 | | | |

---

### Quick Actions Reference

| Button | Function |
|--------|----------|
| 🗑️ **Zero All** | Sets all amplitudes to zero |
| 📐 **Normalize** | Normalizes wavefunction so Σ|c<sub>n</sub>|² = 1 |
| 🎲 **Random** | Creates a random superposition |
| 🔄 **Reset** | Resets simulation to default state |
| ⏸️ **Pause/Resume** | Stops or continues time evolution |

---

### Tips for Effective Learning

1. **Start simple:** Begin with single eigenstates before exploring superpositions
2. **Compare modes:** Switch between Real/Imaginary and Density/Phase to understand both representations
3. **Use pause:** Freeze the animation to study specific configurations
4. **Normalize often:** Keep the wavefunction normalized for meaningful probabilities
5. **Try extremes:** See what happens with very high α values or all states equal
