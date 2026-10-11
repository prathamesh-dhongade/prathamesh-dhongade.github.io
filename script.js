/* ============================================
   Prathamesh Dhongade — Robotics Portfolio
   script.js
   ============================================ */

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------------------------------------
   EDIT ME: fill in real repo links + LinkedIn
   --------------------------------------------- */
const LINKEDIN_URL = "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE"; // TODO: replace with real LinkedIn URL
document.getElementById('linkedin-link').href = LINKEDIN_URL;
document.getElementById('linkedin-card').href = LINKEDIN_URL;

const GITHUB_USER = "prathameshdhongade999-lgtm";

const PROJECTS = [
  {
    name: "TurtleBot3 Autonomous Navigation",
    status: "ongoing",
    category: "nav",
    stack: ["ROS2", "Nav2", "Gazebo", "RViz", "SLAM", "AMCL"],
    desc: "Full autonomous navigation pipeline covering SLAM, localization, waypoint navigation, path planning and dynamic obstacle avoidance using ROS2/Nav2. Validated in Gazebo and on real hardware.",
    link: `https://github.com/${GITHUB_USER}/turtlebot3-autonomous-navigation` // TODO: replace with real repo link
  },
  {
    name: "Custom AMR Platform",
    status: "ongoing",
    category: "nav",
    stack: ["ROS2", "Nav2", "AMCL", "Visual Odometry", "ros2_control"],
    desc: "End-to-end autonomous mobile robot platform combining AMCL with visual odometry — 92% navigation success rate with a 15 Hz real-time control loop.",
    link: `https://github.com/${GITHUB_USER}/custom-amr-platform` // TODO
  },
  {
    name: "LiDAR-based SLAM — Large-Scale Indoor",
    status: "done",
    category: "nav",
    stack: ["ROS2", "LiDAR", "SLAM", "Nav2"],
    desc: "ROS2 SLAM implementation reporting under 2 cm mapping accuracy across 10,000 m² of indoor space, integrated with Nav2 for autonomous navigation.",
    link: `https://github.com/${GITHUB_USER}/lidar-slam-large-scale` // TODO
  },
  {
    name: "Dynamic Path Planning Optimisation",
    status: "done",
    category: "nav",
    stack: ["ROS2", "DWA", "Gazebo", "Path Planning"],
    desc: "Extended a DWA planner for dense dynamic environments — 35% computational reduction while maintaining safety margins, tested with 20+ dynamic agents in Gazebo.",
    link: `https://github.com/${GITHUB_USER}/dynamic-path-planning` // TODO
  },
  {
    name: "Autonomous Warehouse Robot",
    status: "dev",
    category: "nav",
    stack: ["ROS2", "SLAM", "Nav2", "Computer Vision", "Gazebo"],
    desc: "Autonomous warehouse-robot system integrating SLAM, navigation, object detection, path planning and pick-and-place for indoor material-handling.",
    link: `https://github.com/${GITHUB_USER}/autonomous-warehouse-robot` // TODO
  },
  {
    name: "Autonomous Drone Navigation",
    status: "dev",
    category: "nav",
    stack: ["PX4", "Gazebo", "Mission Planning", "Waypoint Navigation"],
    desc: "Simulated autonomous drone-navigation workflow using PX4 and Gazebo, including mission planning, waypoint following and obstacle-avoidance concepts.",
    link: `https://github.com/${GITHUB_USER}/autonomous-drone-navigation` // TODO
  },
  {
    name: "Wall-Following Mobile Robot",
    status: "ongoing",
    category: "nav",
    stack: ["ROS2", "Python/C++", "Sensors", "Gazebo", "Control"],
    desc: "Sensor-based wall-following behaviour, processing distance measurements to maintain a target wall distance, tested in simulation.",
    link: `https://github.com/${GITHUB_USER}/wall-following-robot` // TODO
  },
  {
    name: "Visual-Inertial SLAM",
    status: "dev",
    category: "perception",
    stack: ["Camera", "IMU", "EKF", "Visual-Inertial Estimation"],
    desc: "Visual-inertial localization pipeline combining camera and IMU measurements with Extended Kalman Filtering (EKF) for robot state estimation.",
    link: `https://github.com/${GITHUB_USER}/visual-inertial-slam` // TODO
  },
  {
    name: "Reinforcement Learning for Robot Navigation",
    status: "dev",
    category: "perception",
    stack: ["Reinforcement Learning", "Isaac Sim / Gymnasium", "Python"],
    desc: "Reinforcement-learning environment for training a simulated robot to navigate, reach target goals and avoid obstacles using Isaac Sim or Gymnasium.",
    link: `https://github.com/${GITHUB_USER}/rl-robot-navigation` // TODO
  },
  {
    name: "TIAGo Mobile Manipulator",
    status: "ongoing",
    category: "manipulation",
    stack: ["ROS2", "TIAGo", "Gazebo", "RViz", "Robot Manipulation"],
    desc: "Developed and tested robotic behaviours on the TIAGo mobile manipulator using ROS2 interfaces and Gazebo/RViz for simulation and debugging.",
    link: `https://github.com/${GITHUB_USER}/tiago-mobile-manipulator` // TODO
  },
  {
    name: "Multi-Robot Communication",
    status: "dev",
    category: "other",
    stack: ["ROS2", "DDS", "Multi-Robot Systems"],
    desc: "Communication layer between two ROS2 robots using DDS, focused on sharing maps, navigation goals and robot locations for coordinated operation.",
    link: `https://github.com/${GITHUB_USER}/multi-robot-communication` // TODO
  },
  {
    name: "Autonomous Bush Trimming Robot",
    status: "done",
    category: "other",
    stack: ["ROS2", "3D Perception", "Navigation", "ISO 13849"],
    desc: "Field-robot system incorporating 3D vegetation detection, autonomous navigation and actuation control, with ISO 13849 Performance Level safety design.",
    link: `https://github.com/${GITHUB_USER}/autonomous-bush-trimming-robot` // TODO
  }
];

const STATUS_LABEL = { ongoing: "Ongoing", dev: "In Development", done: "Completed" };
const STATUS_CLASS = { ongoing: "badge-ongoing", dev: "badge-dev", done: "badge-done" };

function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-top">
        <h3>${p.name}</h3>
        <span class="badge ${STATUS_CLASS[p.status]}">${STATUS_LABEL[p.status]}</span>
      </div>
      <p>${p.desc}</p>
      <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <a class="project-link" href="${p.link}" target="_blank" rel="noopener">View Repository ↗</a>
    `;
    grid.appendChild(card);
  });
  // re-trigger reveal for newly added cards
  requestAnimationFrame(() => {
    document.querySelectorAll('#projects-grid .reveal').forEach(el => observer.observe(el));
  });
}

document.getElementById('filter-row').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

/* ---------------- Nav ---------------- */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

navToggle.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navMobile.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

/* ---------------- Reveal on scroll ---------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

renderProjects('all');
document.querySelectorAll('.skill-card, .timeline-item, .edu-item, .contact-card, .about-body, .section-head')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

/* ---------------- Stat counters ---------------- */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* ---------------------------------------------
   3D Hero Background (Three.js point-cloud)
   Lightweight: capped particle count, pauses when
   tab hidden or hero off-screen, respects
   prefers-reduced-motion.
   --------------------------------------------- */
(function initHero3D() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 14;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (e) {
    document.getElementById('loader').classList.add('hidden');
    return; // WebGL unavailable — hero still works without it
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Point cloud — evokes a LiDAR / SLAM scan
  const PARTICLE_COUNT = window.innerWidth < 700 ? 900 : 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const spread = 20;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x39e0ff,
    size: 0.045,
    transparent: true,
    opacity: 0.55,
    sizeAttenuation: true
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // A sparse wireframe icosahedron — subtle "scanned object" accent
  const icoGeo = new THREE.IcosahedronGeometry(4.2, 1);
  const icoMat = new THREE.MeshBasicMaterial({ color: 0x7c5cff, wireframe: true, transparent: true, opacity: 0.18 });
  const ico = new THREE.Mesh(icoGeo, icoMat);
  ico.position.set(3, 0.5, -4);
  scene.add(ico);

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  let running = !prefersReducedMotion;
  let visible = true;

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden && !prefersReducedMotion;
  });

  const heroEl = document.querySelector('.hero');
  const heroObserver = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
  }, { threshold: 0 });
  heroObserver.observe(heroEl);

  function animate() {
    requestAnimationFrame(animate);
    if (!running || !visible) return;

    targetX += (mouseX - targetX) * 0.02;
    targetY += (mouseY - targetY) * 0.02;

    points.rotation.y += 0.0007;
    points.rotation.x = targetY * 0.15;
    points.rotation.y += targetX * 0.0003;

    ico.rotation.x += 0.0012;
    ico.rotation.y += 0.0018;

    camera.position.x += (targetX * 1.2 - camera.position.x) * 0.02;
    camera.position.y += (-targetY * 0.8 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  if (prefersReducedMotion) {
    // render a single static frame, no animation loop
    renderer.render(scene, camera);
  } else {
    animate();
  }

  // Hide loader once first frame is ready
  requestAnimationFrame(() => {
    document.getElementById('loader').classList.add('hidden');
  });
})();

// Fallback: hide loader regardless, in case WebGL path above never fires
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader')?.classList.add('hidden'), 1200);
});
