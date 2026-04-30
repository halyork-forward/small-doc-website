// Smooth scrolling that accounts for the fixed nav height
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const navHeight = nav ? nav.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // allow normal behaviour for top link (#top or #)
      if (!href || href === '#' || href === '#top') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      // update URL hash without jumping
      history.pushState(null, '', href);
    });
  });
});
