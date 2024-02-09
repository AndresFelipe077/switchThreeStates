document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const rejected = document.querySelector('.state.rejected');
    const pending = document.querySelector('.state.pending');
    const approved = document.querySelector('.state.approved');
  
    slider.addEventListener('change', function() {
      if (this.checked) {
        rejected.style.opacity = 0;
        pending.style.opacity = 0;
        approved.style.opacity = 1;
      } else {
        rejected.style.opacity = 1;
        pending.style.opacity = 0;
        approved.style.opacity = 0;
      }
    });
  });
  