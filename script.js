document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.classList.add('sidebar-open');
    overlay.classList.add('show');
  });

  closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-open');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-open');
    this.classList.remove('show');
  });
});
