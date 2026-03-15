/* ═══════════════════ PRASAH PORTFOLIO — SCRIPT ═══════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────── Custom Cursor ────────────── */
  const cursor = document.getElementById('customCursor');
  if (cursor && window.innerWidth > 1024) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    const hoverTargets = document.querySelectorAll('a, button, .film-card, .profile-card, .circle-item, .magnetic-btn');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  /* ────────────── Mobile Menu ────────────── */
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menuOverlay = document.getElementById('mobileMenuOverlay');
  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
    });
    menuOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ────────────── Smooth Scroll for anchor links ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ────────────── Scroll Progress Bar ────────────── */
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    }, { passive: true });
  }

  /* ────────────── Scroll Reveal (IntersectionObserver) — Enhanced ────────────── */
  const reveals = document.querySelectorAll('.anim-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => revealObserver.observe(el));

  /* ────────────── Magnetic Button Hover ────────────── */
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      btn.style.transform = `translate(${deltaX * 6}px, ${deltaY * 4}px)`;
      btn.style.setProperty('--x', (x / rect.width * 100) + '%');
      btn.style.setProperty('--y', (y / rect.height * 100) + '%');
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });

    // Ripple effect on click
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.classList.add('btn-ripple');
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  /* ────────────── 3D Tilt Cards ────────────── */
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (0.5 - y) * 15;
      const tiltY = (x - 0.5) * 15;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ────────────── Parallax Floating Orbs on Scroll ────────────── */
  const orbs = document.querySelectorAll('.floating-orb');
  if (orbs.length > 0) {
    const orbSpeeds = [0.03, -0.02, 0.04, -0.03, 0.025];
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = orbSpeeds[i % orbSpeeds.length];
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });
  }

  /* ────────────── Filmstrip Carousel ────────────── */
  const filmTrack = document.getElementById('filmstripTrack');
  const prevBtn   = document.getElementById('filmPrev');
  const nextBtn   = document.getElementById('filmNext');
  if (filmTrack && prevBtn && nextBtn) {
    const scrollAmt = 400;
    prevBtn.addEventListener('click', () => filmTrack.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => filmTrack.scrollBy({ left:  scrollAmt, behavior: 'smooth' }));
  }

  /* ────────────── Contact Form (demo) ────────────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message Sent! ✓';
      btn.style.background = '#98c1d9';
      btn.style.transform = 'scale(1.05)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.transform = '';
        form.reset();
      }, 2500);
    });
  }

  /* ────────────── Sidebar Strip Active State on Scroll ────────────── */
  const sidebarStrips = document.querySelectorAll('.sidebar-strip');
  if (sidebarStrips.length > 0) {
    const sections = ['projects', 'about', 'skills', 'contact'];
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = id;
        }
      });
      sidebarStrips.forEach(strip => {
        const href = strip.getAttribute('href');
        if (href === '#' + current) {
          strip.style.width = '64px';
          strip.style.filter = 'brightness(1.1)';
        } else {
          strip.style.width = '';
          strip.style.filter = '';
        }
      });
    }, { passive: true });
  }

  /* ────────────── Three.js 3D Hero Scene ────────────── */
  const container = document.getElementById('hero3d');
  if (container && typeof THREE !== 'undefined') {
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Soft lights
    const ambient = new THREE.AmbientLight(0xfff5e6, 0.6);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(5, 8, 5);
    scene.add(directional);
    const point = new THREE.PointLight(0xe8a87c, 0.5, 50);
    point.position.set(-3, 2, 3);
    scene.add(point);

    // Second accent point light
    const point2 = new THREE.PointLight(0x98c1d9, 0.4, 50);
    point2.position.set(3, -1, 4);
    scene.add(point2);

    // Materials
    const matMint  = new THREE.MeshStandardMaterial({ color: 0x98c1d9, roughness: 0.3, metalness: 0.1 });
    const matPink  = new THREE.MeshStandardMaterial({ color: 0xffb7b2, roughness: 0.3, metalness: 0.1 });
    const matPeach = new THREE.MeshStandardMaterial({ color: 0xffdac1, roughness: 0.3, metalness: 0.1 });
    const matOrange= new THREE.MeshStandardMaterial({ color: 0xe8a87c, roughness: 0.3, metalness: 0.1 });
    const matDark  = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5, metalness: 0.3 });

    // Laptop body
    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 2), matDark);
    laptopBase.position.set(0, 0, 0);
    scene.add(laptopBase);

    const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2, 0.08), matDark);
    laptopScreen.position.set(0, 1.1, -0.96);
    laptopScreen.rotation.x = -0.15;
    scene.add(laptopScreen);

    // Screen disabled glow logic here

    // Floating code lines on screen
    const codeLines = [];
    for (let i = 0; i < 6; i++) {
      const lineWidth = 0.5 + Math.random() * 1.5;
      const codeLine = new THREE.Mesh(
        new THREE.BoxGeometry(lineWidth, 0.06, 0.02),
        new THREE.MeshBasicMaterial({ color: 0xf0e8dd, transparent: true, opacity: 0.6 })
      );
      codeLine.position.set(-0.6 + Math.random() * 0.3, 0.55 + i * 0.22, -0.82);
      codeLine.rotation.x = -0.15;
      codeLine.userData.baseX = codeLine.position.x;
      codeLine.userData.speed = 0.3 + Math.random() * 0.5;
      scene.add(codeLine);
      codeLines.push(codeLine);
    }

    // Floating shapes
    const shapes = [];

    const torus = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.12, 16, 100), matMint);
    torus.position.set(-2.5, 1.8, 0.5);
    scene.add(torus);
    shapes.push({ mesh: torus, speed: 0.8, offset: 0, baseY: 1.8 });

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), matPink);
    sphere.position.set(2.2, 2.2, -0.3);
    scene.add(sphere);
    shapes.push({ mesh: sphere, speed: 1.2, offset: 1, baseY: 2.2 });

    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), matPeach);
    ico.position.set(-1.8, -0.5, 1.5);
    scene.add(ico);
    shapes.push({ mesh: ico, speed: 0.6, offset: 2, baseY: -0.5 });

    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), matOrange);
    cube.position.set(2.8, 0, 1);
    scene.add(cube);
    shapes.push({ mesh: cube, speed: 1, offset: 3, baseY: 0 });

    const octahedron = new THREE.Mesh(new THREE.OctahedronGeometry(0.3, 0), matMint);
    octahedron.position.set(0.5, 2.8, 0.8);
    scene.add(octahedron);
    shapes.push({ mesh: octahedron, speed: 0.9, offset: 4, baseY: 2.8 });

    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.5, 6), matPink);
    cone.position.set(-2, 2.8, -0.5);
    scene.add(cone);
    shapes.push({ mesh: cone, speed: 0.7, offset: 5, baseY: 2.8 });

    // Floating dots (particles)
    const dotGeo = new THREE.BufferGeometry();
    const dotCount = 80;
    const dotPositions = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      dotPositions[i * 3]     = (Math.random() - 0.5) * 10;
      dotPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      dotPositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const dots = new THREE.Points(dotGeo, new THREE.PointsMaterial({
      color: 0xe8a87c,
      size: 0.05,
      transparent: true,
      opacity: 0.5
    }));
    scene.add(dots);

    camera.position.set(0, 2, 6);
    camera.lookAt(0, 0.8, 0);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    container.addEventListener('mousemove', e => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      // Rotate and float shapes with smoother bobbing
      shapes.forEach(({ mesh, speed, offset, baseY }) => {
        mesh.rotation.x += 0.005 * speed;
        mesh.rotation.y += 0.008 * speed;
        mesh.position.y = baseY + Math.sin(t * speed + offset) * 0.15;
      });

      // Animate code lines (subtle shimmer)
      codeLines.forEach((line, i) => {
        line.material.opacity = 0.4 + Math.sin(t * 2 + i * 0.8) * 0.25;
      });

      // Screen glow removed

      // Dots drift & rotate
      dots.rotation.y += 0.0015;
      dots.rotation.x += 0.0005;

      // Camera follows mouse subtly
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.8 + 2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0.8, 0);

      // Animate second point light for living feel
      point2.position.x = 3 + Math.sin(t * 0.5) * 2;
      point2.position.y = -1 + Math.cos(t * 0.7) * 1.5;

      renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }

});
