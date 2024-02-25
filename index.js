function goToForm(){
    document.getElementById('form').classList.remove('hidden');

    //hide navbar
    document.getElementById('navbar').classList.add('hidden');

    //hide search area
    document.getElementById('search').classList.add('hidden');

    //hide list
    document.getElementById('list').classList.add('hidden');

    //hide add new place button
    document.getElementById('add-new-place').classList.add('hidden');


}
function addPlace(){
    
    const addH = document.getElementById('list-table');

    //id push
    const id = document.createElement('div');
    const idH = document.createElement('h1');
    const inputId = document.getElementById('input-id').value;
    idH.innerText = inputId;
    id.appendChild(idH);
    addH.appendChild(id);
    console.log(addH);

    //name push
    const name = document.createElement('div');
    const idName = document.createElement('h1');
    const inputName = document.getElementById('input-name').value;
    idName.innerText = inputName;
    name.appendChild(idName);
    addH.appendChild(name);

    //address push
    const address = document.createElement('div');
    const idAddress = document.createElement('h1');
    const inputAddress = document.getElementById('input-address').value;
    idAddress.innerText = inputAddress;
    address.appendChild(idAddress);
    addH.appendChild(address);

    //rating push
    const rating = document.createElement('div');
    const idRating = document.createElement('h1');
    const inputRating = document.getElementById('input-rating').value;
    idRating.innerText = inputRating;
    rating.appendChild(idRating);
    addH.appendChild(rating);

    const img = document.createElement('div');
    const idImg = document.createElement('h1');
    idImg.innerText = 'not added';
    img.appendChild(idImg);
    addH.appendChild(img);

    //btn push
    const button = document.createElement('div');
    const button1 = document.createElement('button');
    button1.innerText = 'Update';
    button1.classList.add('btn', 'btn-success');
    const button2 = document.createElement('button');
    button2.innerText = 'Delete';
    button2.classList.add('btn', 'btn-warning', 'bg-red-500');
    button.appendChild(button1);
    button.appendChild(button2);
    button.classList.add('flex','flex-col', 'lg:flex-row', 'gap-2');
    addH.appendChild(button);
    
    addH.classList.add('grid', 'grid-cols-6','gap-2', 'lg:gap-4', 'text-sm', 'lg:text-2xl', 'my-6');

    //hide form
    document.getElementById('form').classList.add('hidden');

    //show navbar
    document.getElementById('navbar').classList.remove('hidden');

    //show search area
    document.getElementById('search').classList.remove('hidden');

    //show list
    document.getElementById('list').classList.remove('hidden');

    //show add new place button
    document.getElementById('add-new-place').classList.remove('hidden');

    //document.getElementById('form').addEventListener('click', function(e){
      //  location.reload();
    //});
}