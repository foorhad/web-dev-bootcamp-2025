console.log('file connected');
const sections = document.getElementsByTagName('section')
// const lst = document.querySelectorAll('section')
console.log(sections)
for(const section of sections){
    console.log('section is: ',section);
    section.style.background = 'red';
    section.style.padding = '20px';
    section.style.marginBottom = '10px';
    section.style.borderRadius= '10px'
    section.style.color = 'white'
    section.style.border = '4px solid blue'

}

for(const section of sections){
    section.classList.add('style-container')
}

const newelement = document.createElement('li')
newelement.innerText = 'Tamim Iqbal';

const newelements = document.getElementById('player-list');
newelements.append(newelement);


//pick up parent
const mainContainer = document.getElementById('main-container');

//create child
const createSection = document.createElement('section')

//create sub child
const h1 = document.createElement('h1')
h1.innerText = "Jashne Julus 2025";
createSection.append(h1)

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Chattogram';
ul.append(li1);

const li2 = document.createElement('li');
li2.innerText = 'Dhaka';
ul.append(li2);


createSection.append(ul)



//add child to the parent
mainContainer.append(createSection);


//inner HTML easy way to add data in html file

const booksection = document.createElement('section');
booksection.innerHTML = `
    <h1>Country List<h1/>
    <ul>
        <li>Chattogram</li>
        <li>Chattogram1</li>
        <li>Chattogram2</li>
        <li>Chattogram3</li>
        <li>Chattogram4</li>
    <ul/>
`
mainContainer.append(booksection)