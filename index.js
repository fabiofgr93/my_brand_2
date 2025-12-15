    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id=a.getAttribute('href').slice(1);
        const el=document.getElementById(id);
        if(el){e.preventDefault(); el.scrollIntoView({behavior:'smooth'})}
      });
    });

    // “Ctrl+K” focus search (feels like big platforms)
    const searchInput = document.getElementById('searchInput');
    document.addEventListener('keydown', (e)=>{
      if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==='k'){
        e.preventDefault();
        searchInput?.focus();
      }
    });

    // Demo submit
    const form = document.getElementById('contactForm');
    form?.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Demo: richiesta inviata ✅');
      form.reset();
    });

    const overlay = document.getElementById('demoOverlay');
    const iframe = document.getElementById('demoIframe');
    const closeBtn = document.getElementById('closeDemo');

    document.querySelectorAll('.demo-card').forEach(card=>{
      const btn = card.querySelector('.btn-preview');
      btn.addEventListener('click', ()=>{
        iframe.src = card.dataset.demo;
        overlay.classList.remove('hidden');
      });
    });

    closeBtn.addEventListener('click', ()=>{
      iframe.src = '';
      overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e)=>{
      if(e.target === overlay){
        iframe.src = '';
        overlay.classList.add('hidden');
      }
    });