    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const href = a.getAttribute('href');
        if(!href || !href.startsWith('#')) return;
        const id=href.slice(1);
        const el=document.getElementById(id);
        if(el){e.preventDefault(); el.scrollIntoView({behavior:'smooth'})}
      });
    });

    // WhatsApp demo (sostituisci numero)
    const waBtn = document.getElementById('waBtn');
    waBtn?.addEventListener('click', (e)=>{
      e.preventDefault();
      const phone = '390000000000'; // <-- cambia
      const text = encodeURIComponent('Ciao! Ho bisogno di un intervento. Zona: ____ Problema: ____ Urgenza: ____');
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
    });

    // Demo submit
    const form = document.getElementById('contactForm');
    form?.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Demo: richiesta inviata ✅ (in produzione: invio email/CRM/WhatsApp)');
      form.reset();
    });