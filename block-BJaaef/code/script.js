let sec=document.querySelector(`section`);
sec.classList.add(`section`)
got.houses.forEach(eachHouse=>{
    eachHouse.people.forEach(Character=>{
        let div=document.createElement(`div`);
        div.classList.add(`img-div`);
        let h2=document.createElement(`h2`);
        h2.classList.add(`h2`);
        h2.innerText=Character.name;
        let article=document.createElement(`article`);

        let p=document.createElement(`p`);
        p.classList.add(`paragraph`);

        p.innerText=Character.description;
        let buttons=document.createElement(`button`);
        buttons.classList.add(`btn`)
        buttons.innerText="Learn more";

        let img=document.createElement(`img`);
        img.classList.add(`img-box`);
        img.src=Character.image;

        let div1=document.createElement(`div`);
        div1.classList.add(`div1`);
        div1.append(img,h2);
        div.append(p,buttons);
        
        article.append(div1,div);
        sec.append(article);

    
    });
});

