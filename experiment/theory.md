### Introduction

Oscillations are a ubiquitous phenomenon observed in various natural systems, from vibrating molecules to celestial bodies. Understanding the behavior of oscillating systems is crucial in physics, as it provides insights into the fundamental principles governing the dynamics of particles and waves.

The **Quantum Harmonic Oscillator** emerges as a fundamental concept in quantum mechanics. It represents a particle or system undergoing harmonic motion in the quantum realm, where classical mechanics no longer holds sway. The study of the quantum harmonic oscillator not only deepens our understanding of quantum mechanics but also finds applications in various fields, including molecular spectroscopy, solid-state physics, and quantum computing.

---

### 1. Classical Harmonic Oscillator

Consider a particle of mass **m** moving back and forth along the x-direction about the equilibrium position x = 0. In classical mechanics, the particle experiences a linear restoring force:

**F<sub>x</sub> = -kx**

where:
- **x** is the displacement from equilibrium
- **k** is the force constant (spring constant)

The motion of the particle is described by the equation:

**x(t) = A cos(ωt + φ)**

where:
- **A** is the amplitude
- **ω = √(k/m)** is the angular frequency
- **φ** is the phase angle

The total energy **E** of the oscillator is the sum of kinetic and potential energy:

**E = K + U = ½mv² + ½kx²**

At the turning points x = ±A, the kinetic energy is zero, and the energy is solely potential energy.

---

### 2. Quantum Harmonic Oscillator

The theoretical foundation of the quantum oscillator is rooted in the **Schrödinger equation**, which describes the behaviour of quantum systems. For a harmonic oscillator potential, the time-independent Schrödinger equation takes the form:

**-ℏ²/2m · d²ψ/dx² + ½mω²x²ψ = Eψ**

where:
- **ℏ** is the reduced Planck constant (h/2π)
- **m** is the mass of the particle
- **ω** is the angular frequency of the oscillator potential
- **E** represents the energy eigenvalues
- **ψ(x)** denotes the wavefunction

---

### 3. Energy Quantization

The solutions yield the **quantized energy eigenvalues**:

**E<sub>n</sub> = ℏω(n + ½)**

where:
- **n = 0, 1, 2, 3, ...** is the quantum number
- Each energy level is equally spaced by **ℏω**

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Quantum Number (n)</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Energy Level</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Energy Value</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 0 (Ground State)</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">E₀</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">½ℏω</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 1 (First Excited)</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">E₁</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">3/2 ℏω</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 2</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">E₂</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5/2 ℏω</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 3</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">E₃</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">7/2 ℏω</td></tr>
</table>

**Key Insight:** Unlike classical mechanics, the ground state energy is **not zero** but **½ℏω** - this is called **zero-point energy**.

---

### 4. Wave Functions (Eigenstates)

The wavefunctions for the quantum harmonic oscillator are given by:

**ψ<sub>n</sub>(x) = N<sub>n</sub> · H<sub>n</sub>(αx) · e<sup>-α²x²/2</sup>**

where:
- **N<sub>n</sub>** is the normalization constant
- **H<sub>n</sub>** are the Hermite polynomials
- **α = √(mω/ℏ)**

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">State</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Hermite Polynomial</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Nodes</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 0</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">H₀ = 1</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0 nodes</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 1</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">H₁ = 2x</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1 node</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 2</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">H₂ = 4x² - 2</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2 nodes</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">n = 3</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">H₃ = 8x³ - 12x</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">3 nodes</td></tr>
</table>

---

### 5. Superposition States

A general quantum state can be a **superposition** of multiple eigenstates:

**ψ(x,t) = Σ c<sub>n</sub> ψ<sub>n</sub>(x) e<sup>-iE<sub>n</sub>t/ℏ</sup>**

where:
- **c<sub>n</sub>** are complex coefficients (amplitudes)
- **|c<sub>n</sub>|²** gives the probability of finding the system in state n
- The sum of all probabilities equals 1: **Σ|c<sub>n</sub>|² = 1**

---

### 6. Coherent States

**Coherent states** are special quantum states that most closely resemble classical harmonic oscillation. They are characterized by:

- Minimum uncertainty product: **ΔxΔp = ℏ/2**
- The probability density oscillates back and forth like a classical particle
- They are parameterized by a complex number **α**

**|α⟩ = e<sup>-|α|²/2</sup> Σ (α<sup>n</sup>/√n!) |n⟩**

In the simulation, you can create coherent states using the **Coherent(α)** button and adjust the α parameter.

---

### 7. Key Differences: Classical vs Quantum

<table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: Arial, sans-serif;">
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Aspect</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Classical</th>
<th style="padding: 12px 8px; border: 1px solid #ddd; text-align: center;">Quantum</th>
</tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Energy</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Continuous</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Quantized (discrete levels)</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Ground State</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">E = 0 possible</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">E₀ = ½ℏω (zero-point energy)</td></tr>
<tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Position</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Definite trajectory</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Probability distribution</td></tr>
<tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Wave Nature</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">No</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Yes (wavefunction)</td></tr>
</table>

---

### 8. Visualization in Simulation

In this virtual lab simulation, you can visualize:

1. **Real/Imaginary View:** Shows the real (orange) and imaginary (cyan) parts of the wavefunction oscillating in time

2. **Density/Phase View:** Shows the probability density |ψ|² as height, with color representing the local phase

3. **Phasor Clocks:** Each clock represents an eigenstate's amplitude and phase. The hand length shows amplitude, and the angle shows phase.

4. **Time Evolution:** Each eigenstate rotates at a frequency proportional to its energy (n + ½)ω
