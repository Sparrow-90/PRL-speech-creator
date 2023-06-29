const btnAdd = document.querySelector('.add');
const btnRemove = document.querySelector('.remove')
const div = document.querySelector('.text-container')

const column1 = [
    'Koleżanki i koledzy',
    'Z drugiej strony',
    'Podobnie',
    'Nie zapominajmy jednak, ze',
    'W ten sposób',
    'Praktyka dnia codziennego dowodzi, że',
    'Wagi i znaczenia tych problemów nie trzeba szerzej udowadniać, ponieważ',
    'Różnorakie i bogate doświadczenie',
    'Troska organizacji a szczególnie',
    'Wyższe założenia ideowe, a także'
]

const column2 = [
    'realizacja nakreślonych zadań programowych',
    'zakres i miejsce szkolenia kadr',
    'stały wzrost ilości i zakres naszej aktywności',
    'aktualna struktura organizacji',
    'nowy model działalności organizacyjnej',
    'dalszy rozwój różnych form działalności',
    'stałe zabezpieczenie informacyjno propagandowe naszej działalności',
    'wzmocnienie i rozwijanie struktur',
    'konsultacja z szerokim aktywem',
    'rozpoczęcie powszechnej akcji kształtowania postaw',
]

const column3 = [
    'zmusza nas do przeanalizowania',
    'spełnia istotną rolę w kształtowaniu',
    'wymaga sprecyzowania i określenia',
    'pomaga w przygotowaniu realizacji',
    'zabezpiecza udział szerokiej grupie w kształtowaniu',
    'spełnia ważne zadanie w wypracowaniu',
    'umożliwia w większym stopniu tworzenie',
    'powoduje docenienie wagi',
    'przedstawia interesującą próbę sprawdzenia',
    'pociąga za sobą proces wdrażania i unowocześniania'
]

const column4 = [
    'istniejących warunków administracyjno finansowych.',
    'dalszych kierunków rozwoju',
    'systemu powszechnego uczestnictwa.',
    'postaw uczestników wobec zadań stawianych przez partię.',
    'nowych propozycji',
    'kierunków powszechnego wychowania i kształcenia.',
    'systemu szkolenia kadry odpowiadającego potrzebom partii.',
    'odpowiednich warunków aktywizacji.',
    'modelu rozwoju.',
    'form oddziaływania.'
]

const textGenerator = () =>{
    const indexColumn1 = Math.floor(Math.random() * column1.length);
    const indexColumn2 = Math.floor(Math.random() * column2.length);
    const indexColumn3 = Math.floor(Math.random() * column3.length);
    const indexColumn4 = Math.floor(Math.random() * column4.length);
    const newLine = document.createElement('p');
    newLine.textContent = `${column1[indexColumn1]} ${column2[indexColumn2]} ${column3[indexColumn3]} ${column4[indexColumn4]}`;
    div.appendChild(newLine);
}

btnAdd.addEventListener('click', textGenerator);
btnRemove.addEventListener('click', ()=>{
    div.textContent = ""
})