export default async function loadContent(path, lang, setInner) {
    //Получаем данные страницы. Сначала содержимое страницы, затем разметку
    let response = await fetch(`${path}.json`);
    const textContent = await response.json();
    response = await fetch(`${path}.html`);
    let htmlContent = await response.text();
    //Устанавливаем название страницы
    document.title = `${textContent[lang].pageTitle} | Journey.land`
    //Получаем перечень ключей в textContent
    const contentKeys = Object.keys(textContent[lang]);
    //Для каждого ключа выполняются следующие операции:
    //1. В htmlContent находится текст, который соответсвует названию ключа.
    //2. Производится замена найденного текста на содержимое объекта textContent под текущим ключом
    contentKeys.forEach(key => {
        const regex = new RegExp(key, 'g');
        htmlContent = htmlContent.replace(regex, textContent[lang][key]);
    })
    setInner(props => htmlContent);
}