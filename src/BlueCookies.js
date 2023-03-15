const BlueCookiesRemove = (container) => {
    container.animate(
        [{ transform: 'translateY(0px)' },{ transform: 'translateY(100px)' }],
        { duration: 300, iterations: 1 }
      );
    Promise.all(container.getAnimations().map((animation) => animation.finished)).then(
        () => {
          container.remove()
        }
      );
  }
  const BlueCookies = (information, accepted, button, style, cookieid) => {
    const localstoragekey = 'bluecookies-'+cookieid
    const cookiesAccepted = localStorage.getItem(localstoragekey)
    const el = document.createElement('div');
    el.setAttribute(
      'style',
      'position:fixed; z-index: 9999; bottom: 1%; left: 1%; width: 98%; display:flex; justify-content:center; align-items:center; border-radius:4px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); '+style
    )
    const elLeft = document.createElement('div');
    const elRight = document.createElement('div');
      const elAccepted = document.createElement('div');
    elLeft.setAttribute(
      'style',
      'padding: 10px; font-size: 0.8rem;'
    )
    elRight.setAttribute(
      'style',
      'padding: 10px;'
    )
    
    const acceptBtn = document.createElement('button');
    acceptBtn.setAttribute(
      'style',
      'background:#f5f5f5; color:#303030; border:none; padding: 4px 8px; border-radius: 2px; margin: 6px 10px; cursor:pointer; box-shadow: 0 4px 3px rgba(0,0,0,0.1);'
    )
    
    elAccepted.textContent = accepted
    elLeft.innerHTML = information
    acceptBtn.innerHTML = button
    elRight.appendChild(acceptBtn)
    if(cookiesAccepted){
      el.appendChild(elAccepted)
      setTimeout(()=>{
          BlueCookiesRemove(el)
        }, 3000)
    } else {
      el.appendChild(elLeft);
      el.appendChild(elRight);
    }
    document.body.appendChild(el)
    
    // Animate entrance
    el.animate(
      [{ transform: 'translateY(30px)' },{ transform: 'translateY(0px)' }],
      { duration: 500, iterations: 1 }
    );
    
    acceptBtn.addEventListener('click', ()=>{
      localStorage.setItem(localstoragekey, true)
      BlueCookiesRemove(el)
    })
  
  }