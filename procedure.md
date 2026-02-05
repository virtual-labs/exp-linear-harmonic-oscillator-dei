### Step 1: Understanding the Interface

When you open the simulation, you will see three main panels:

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Panel</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Location</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Contents</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Control Panel</strong></td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Left</td><td style="padding: 8px; border: 1px solid #ddd;">Quantum parameters, preset states, quick actions, state amplitude sliders</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Visualization</strong></td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Center</td><td style="padding: 8px; border: 1px solid #ddd;">Main canvas showing wavefunction, phasor clocks at bottom</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Data & Info</strong></td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Right</td><td style="padding: 8px; border: 1px solid #ddd;">Live quantum data table, instructions, key concepts</td></tr>
</table>

---

### Step 2: Explore Preset Quantum States

Click on the preset buttons to observe different quantum behaviors:

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Preset</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Description</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">What to Observe</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Ground State (n=0)</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Lowest energy state</td><td style="padding: 8px; border: 1px solid #ddd;">No nodes, Gaussian-shaped probability</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>First Excited (n=1)</strong></td><td style="padding: 8px; border: 1px solid #ddd;">First excited state</td><td style="padding: 8px; border: 1px solid #ddd;">One node at center</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Superposition</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Equal mix of n=0 and n=1</td><td style="padding: 8px; border: 1px solid #ddd;">Oscillating probability density</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Coherent State</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Classical-like oscillation</td><td style="padding: 8px; border: 1px solid #ddd;">Wave packet moves back and forth</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Equal Mix</strong></td><td style="padding: 8px; border: 1px solid #ddd;">All states equally weighted</td><td style="padding: 8px; border: 1px solid #ddd;">Complex interference pattern</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>High Energy</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Maximum quantum number</td><td style="padding: 8px; border: 1px solid #ddd;">Many nodes visible</td></tr>
</table>

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

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Mode</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Button</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">What It Shows</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Real/Imaginary</strong></td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">📈 Real/Imaginary</td><td style="padding: 8px; border: 1px solid #ddd;">Orange line: Real part of ψ; Cyan line: Imaginary part</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Density/Phase</strong></td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">🌈 Density/Phase</td><td style="padding: 8px; border: 1px solid #ddd;">Height shows probability density |ψ|²; Color shows local phase</td></tr>
</table>

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

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">S.No</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">State (n)</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Amplitude</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Probability |c<sub>n</sub>|²</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Energy E<sub>n</sub>/ℏω</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 0</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.500</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 1</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.500</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">3</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 2</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2.500</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 3</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">3.500</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 4</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4.500</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 5</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5.500</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">7</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 6</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6.500</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">8</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 7</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1.000</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">7.500</td></tr>
</table>

---

### Quick Actions Reference

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Button</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Function</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">🗑️ <strong>Zero All</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Sets all amplitudes to zero</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">📐 <strong>Normalize</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Normalizes wavefunction so Σ|c<sub>n</sub>|² = 1</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">🎲 <strong>Random</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Creates a random superposition</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">🔄 <strong>Reset</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Resets simulation to default state</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">⏸️ <strong>Pause/Resume</strong></td><td style="padding: 8px; border: 1px solid #ddd;">Stops or continues time evolution</td></tr>
</table>

---

### Tips for Effective Learning

1. **Start simple:** Begin with single eigenstates before exploring superpositions
2. **Compare modes:** Switch between Real/Imaginary and Density/Phase to understand both representations
3. **Use pause:** Freeze the animation to study specific configurations
4. **Normalize often:** Keep the wavefunction normalized for meaningful probabilities
5. **Try extremes:** See what happens with very high α values or all states equal
