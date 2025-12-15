
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
      });
    });

    // Demo cart counter
    const cartCountEl = document.getElementById('cart-count');
    let cartCount = 0;
    document.querySelectorAll('[data-add]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        cartCount++;
        cartCountEl.textContent = String(cartCount);
        btn.textContent = "Aggiunto ✓";
        btn.style.opacity = "0.9";
        setTimeout(()=>{ btn.textContent = "Aggiungi al carrello"; btn.style.opacity = "1"; }, 900);
      });
    });

    document.getElementById('cart-btn').addEventListener('click', ()=>{
      alert("Demo carrello 🛒\nProdotti: " + cartCount);
    });

    // Demo form
    document.getElementById('support-form').addEventListener('submit', (e)=>{
      e.preventDefault();
      alert("Messaggio inviato (demo) ✅");
      e.target.reset();
    });

    // Theme demo toggle (usa theme.js)
    document.getElementById('theme-toggle').addEventListener('click', ()=>{
      const root = document.documentElement;
      const current = root.getAttribute('data-template') || 'luxe-commerce';
      const next = current === 'luxe-commerce' ? 'clean-saas' : 'luxe-commerce';
      root.setAttribute('data-template', next);
      window.applyTheme({ template: next });
    });
